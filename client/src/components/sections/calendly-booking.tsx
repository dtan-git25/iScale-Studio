import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, CheckCircle2, Loader2, ExternalLink } from "lucide-react";
import { format, addDays } from "date-fns";
import { useLocation } from "wouter";

interface TimeSlot {
  time: string;
  available: boolean;
  rawTime: string;
}

interface DateOption {
  dayName: string;
  monthDay: string;
  fullDate: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyBooking() {
  const [, setLocation] = useLocation();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSlotRaw, setSelectedSlotRaw] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [availableDates, setAvailableDates] = useState<DateOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'datetime' | 'form'>('datetime');
  const [useCalendlyEmbed, setUseCalendlyEmbed] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Web & App Development',
    message: ''
  });

  const [datePageIndex, setDatePageIndex] = useState(0);
  const datesPerPage = 4;

  const calendlyUrl = "https://calendly.com/iscalestudio/30min";

  const allDates = (() => {
    const dates: DateOption[] = [];
    const today = new Date();

    for (let i = 0; i < 45; i++) {
      const date = addDays(today, i);
      if (date.getDay() !== 0) {
        dates.push({
          dayName: format(date, 'EEE'),
          monthDay: format(date, 'MMM d'),
          fullDate: format(date, 'yyyy-MM-dd')
        });
      }
      if (dates.length >= 30) break;
    }
    return dates;
  })();

  useEffect(() => {
    setAvailableDates(allDates.slice(datePageIndex * datesPerPage, (datePageIndex + 1) * datesPerPage));
  }, [datePageIndex]);

  useEffect(() => {
    if (allDates.length > 0 && !selectedDate) {
      const firstDate = allDates[0].fullDate;
      setSelectedDate(firstDate);
      fetchAvailableSlots(firstDate, true);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const fetchAvailableSlots = async (date: string, autoSelectFirst: boolean = false) => {
    setSlotsLoading(true);
    setError(null);

    const fallbackSlots = [
      { time: "9:00 AM", available: true, rawTime: `${date}T09:00:00+08:00` },
      { time: "10:00 AM", available: true, rawTime: `${date}T10:00:00+08:00` },
      { time: "11:00 AM", available: true, rawTime: `${date}T11:00:00+08:00` },
      { time: "2:00 PM", available: true, rawTime: `${date}T14:00:00+08:00` },
      { time: "3:00 PM", available: true, rawTime: `${date}T15:00:00+08:00` },
      { time: "4:00 PM", available: true, rawTime: `${date}T16:00:00+08:00` }
    ];

    try {
      const response = await fetch(`/api/calendly/availability?date=${date}`);
      const data = await response.json();

      if (data.success && data.slots.length > 0) {
        setAvailableSlots(data.slots);
        if (autoSelectFirst && data.slots.length > 0) {
          setSelectedTime(data.slots[0].time);
          setSelectedSlotRaw(data.slots[0].rawTime);
        }
      } else {
        setAvailableSlots(fallbackSlots);
        if (autoSelectFirst) {
          setSelectedTime(fallbackSlots[0].time);
          setSelectedSlotRaw(fallbackSlots[0].rawTime);
        }
      }
    } catch (err) {
      console.error('Error fetching slots:', err);
      setAvailableSlots(fallbackSlots);
      if (autoSelectFirst) {
        setSelectedTime(fallbackSlots[0].time);
        setSelectedSlotRaw(fallbackSlots[0].rawTime);
      }
    } finally {
      setSlotsLoading(false);
    }
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setSelectedSlotRaw(null);
    fetchAvailableSlots(date);
  };

  const handleTimeSelect = (time: string, rawTime: string) => {
    setSelectedTime(time);
    setSelectedSlotRaw(rawTime);
  };

  const handleContinueToForm = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  const openCalendlyPopup = () => {
    const prefillParams = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.company || '',
      a2: formData.service || '',
    });
    
    const url = `${calendlyUrl}?${prefillParams.toString()}`;
    
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank');
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/calendly/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selectedSlot: selectedSlotRaw,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setLocation('/booking-confirmed');
      } else {
        if (result.error?.includes('paid plan') || response.status === 403) {
          setUseCalendlyEmbed(true);
          openCalendlyPopup();
        } else {
          setError(result.error || 'Booking failed. Please try again or use the direct booking link below.');
          setUseCalendlyEmbed(true);
        }
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError('An error occurred. Please use the direct booking link below.');
      setUseCalendlyEmbed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">Schedule Your Consultation</h2>
                <p className="text-base text-gray-700">
                  Book a personalized 30-minute call with our solutions architect to discuss your AI transformation needs.
                </p>
              </motion.div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900">What to Expect</h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">30 Minutes</h4>
                    <p className="text-sm text-gray-700">Quick call to understand your needs</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Solutions Architect</h4>
                    <p className="text-sm text-gray-700">Expert guidance tailored to you</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">No Obligation</h4>
                    <p className="text-sm text-gray-700">Explore possibilities risk-free</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-4 bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 rounded-xl"
              >
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Prefer to book directly?</strong>
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#5808fb] font-medium text-sm transition-colors"
                  data-testid="link-calendly-direct"
                >
                  Open Calendly Scheduler <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            <div>
              {step === 'datetime' ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Select a Time</h3>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-gray-700">Pick a date</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setDatePageIndex(Math.max(0, datePageIndex - 1))}
                          disabled={datePageIndex === 0}
                          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          data-testid="button-prev-dates"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <span className="text-xs text-gray-500">
                          {datePageIndex * datesPerPage + 1}-{Math.min((datePageIndex + 1) * datesPerPage, allDates.length)} of {allDates.length}
                        </span>
                        <button
                          onClick={() => setDatePageIndex(Math.min(Math.ceil(allDates.length / datesPerPage) - 1, datePageIndex + 1))}
                          disabled={datePageIndex >= Math.ceil(allDates.length / datesPerPage) - 1}
                          className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          data-testid="button-next-dates"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {availableDates.map((d, idx) => (
                        <motion.button
                          key={d.fullDate}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => handleDateSelect(d.fullDate)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedDate === d.fullDate
                              ? "border-[#9929ea] bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20"
                              : "border-gray-100 bg-gray-50 hover:border-[#9929ea] hover:bg-white"
                          }`}
                          data-testid={`button-date-${d.fullDate}`}
                        >
                          <div className="text-xs font-medium text-gray-700">{d.dayName}</div>
                          <div className="text-sm font-bold text-gray-900">{d.monthDay}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    {slotsLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin text-[#9929ea]" />
                        <span className="ml-2 text-gray-600">Loading available times...</span>
                      </div>
                    ) : availableSlots.length > 0 ? (
                      <div className="space-y-4">
                        {availableSlots.filter(slot => slot.time.includes('AM')).length > 0 && (
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Morning</p>
                            <div className="grid grid-cols-4 gap-2">
                              {availableSlots.filter(slot => slot.time.includes('AM')).map((slot, idx) => (
                                <motion.button
                                  key={slot.time}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  onClick={() => handleTimeSelect(slot.time, slot.rawTime)}
                                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all hover:border-[#9929ea] ${
                                    selectedTime === slot.time
                                      ? "border-[#9929ea] bg-gradient-to-br from-[#9929ea] to-[#5808fb] text-white"
                                      : "border-gray-100 bg-gray-50 text-gray-700 hover:bg-white"
                                  }`}
                                  data-testid={`button-time-${slot.time.replace(/\s/g, '-')}`}
                                >
                                  {slot.time}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )}

                        {availableSlots.filter(slot => slot.time.includes('PM')).length > 0 && (
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Afternoon</p>
                            <div className="grid grid-cols-4 gap-2">
                              {availableSlots.filter(slot => slot.time.includes('PM')).map((slot, idx) => (
                                <motion.button
                                  key={slot.time}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  onClick={() => handleTimeSelect(slot.time, slot.rawTime)}
                                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all hover:border-[#9929ea] ${
                                    selectedTime === slot.time
                                      ? "border-[#9929ea] bg-gradient-to-br from-[#9929ea] to-[#5808fb] text-white"
                                      : "border-gray-100 bg-gray-50 text-gray-700 hover:bg-white"
                                  }`}
                                  data-testid={`button-time-${slot.time.replace(/\s/g, '-')}`}
                                >
                                  {slot.time}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : selectedDate ? (
                      <p className="text-gray-600 text-center py-4">No available times for this date</p>
                    ) : (
                      <p className="text-gray-600 text-center py-4">Select a date to see available times</p>
                    )}
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    onClick={handleContinueToForm}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full mt-8 bg-gradient-to-r from-[#9929ea] to-[#5808fb] hover:from-[#8629e4] hover:to-[#4a07eb] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-continue"
                  >
                    Continue
                  </motion.button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Your Details</h3>
                    <button
                      onClick={() => setStep('datetime')}
                      className="text-sm text-[#9929ea] hover:underline"
                      data-testid="button-change-time"
                    >
                      Change time
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-[#9929ea]" />
                      <span className="font-medium text-gray-900">
                        {selectedDate && format(new Date(selectedDate), 'EEEE, MMMM d, yyyy')}
                      </span>
                      <span className="text-gray-600">at</span>
                      <span className="font-medium text-gray-900">{selectedTime}</span>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 rounded-lg p-3 mb-4 text-sm">
                      {error}
                    </div>
                  )}

                  {useCalendlyEmbed && (
                    <div className="bg-blue-50 text-blue-700 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium mb-2">Complete your booking on Calendly:</p>
                      <button
                        onClick={openCalendlyPopup}
                        className="inline-flex items-center gap-2 bg-[#9929ea] hover:bg-[#8629e4] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                        data-testid="button-open-calendly"
                      >
                        Open Calendly <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors"
                        placeholder="Your full name"
                        required
                        data-testid="input-name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors"
                        placeholder="+63 XXX XXX XXXX"
                        data-testid="input-phone"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors"
                        placeholder="Your company"
                        data-testid="input-company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors bg-white"
                        data-testid="select-service"
                      >
                        <option value="AI Web & App Development">AI Web & App Development</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="AI Agents">AI Agents</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="AI/ML Development">AI/ML Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#9929ea] focus:outline-none transition-colors resize-none"
                        placeholder="Brief description of what you're looking to achieve..."
                        rows={3}
                        data-testid="textarea-message"
                      />
                    </div>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleConfirmBooking}
                    disabled={loading || !formData.name || !formData.email}
                    className="w-full mt-6 bg-gradient-to-r from-[#9929ea] to-[#5808fb] hover:from-[#8629e4] hover:to-[#4a07eb] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="button-confirm-booking"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-gray-700 mt-4">
                    We'll send you a calendar invite and meeting details
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
