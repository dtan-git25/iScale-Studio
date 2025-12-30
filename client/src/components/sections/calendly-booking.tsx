import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import { format, isBefore, startOfDay } from "date-fns";
import { Link } from "wouter";
import { Calendar } from "@/components/ui/calendar";

interface TimeSlot {
  time: string;
  available: boolean;
  rawTime: string;
  schedulingUrl?: string;
}

interface BookingConfirmation {
  formattedDate: string;
  formattedTime: string;
  email: string;
  name: string;
}

export function CalendlyBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSlotRaw, setSelectedSlotRaw] = useState<string | null>(null);
  const [selectedSchedulingUrl, setSelectedSchedulingUrl] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'datetime' | 'form' | 'success'>('datetime');
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingConfirmation | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Web Development',
    message: ''
  });

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(format(selectedDate, 'yyyy-MM-dd'), true);
    }
  }, []);

  const fetchAvailableSlots = async (dateStr: string, autoSelectFirst: boolean = false) => {
    setSlotsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/calendly/availability?date=${dateStr}`);
      const data = await response.json();

      if (data.success) {
        if (data.slots.length > 0) {
          setAvailableSlots(data.slots);
          if (autoSelectFirst) {
            const firstAvailable = data.slots.find((s: TimeSlot) => s.available);
            if (firstAvailable) {
              setSelectedTime(firstAvailable.time);
              setSelectedSlotRaw(firstAvailable.rawTime);
              setSelectedSchedulingUrl(firstAvailable.schedulingUrl || null);
            }
          }
        } else {
          setAvailableSlots([]);
        }
      } else {
        console.error('API error:', data.error);
        setError('Unable to load availability. Please try again later.');
        setAvailableSlots([]);
      }
    } catch (err) {
      console.error('Error fetching slots:', err);
      setError('Unable to connect to booking system. Please try again later.');
      setAvailableSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    setSelectedTime(null);
    setSelectedSlotRaw(null);
    setSelectedSchedulingUrl(null);
    fetchAvailableSlots(format(date, 'yyyy-MM-dd'), true);
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    setSelectedTime(slot.time);
    setSelectedSlotRaw(slot.rawTime);
    setSelectedSchedulingUrl(slot.schedulingUrl || null);
  };

  const handleContinueToForm = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    if (!selectedSlotRaw) {
      setError('Please select a valid time slot. Try selecting a different date.');
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
          startTime: selectedSlotRaw,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setBookingConfirmation({
          formattedDate: result.booking.formattedDate,
          formattedTime: result.booking.formattedTime,
          email: formData.email,
          name: formData.name
        });
        setStep('success');
      } else {
        setError(result.error || 'Booking failed. Please try again.');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookAnother = () => {
    setSelectedDate(new Date());
    setSelectedTime(null);
    setSelectedSlotRaw(null);
    setSelectedSchedulingUrl(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'AI Web Development',
      message: ''
    });
    setBookingConfirmation(null);
    setStep('datetime');
    fetchAvailableSlots(format(new Date(), 'yyyy-MM-dd'), true);
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
          className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-6 lg:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Info */}
            <div className="lg:col-span-3">
              {step !== 'success' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h2 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">Schedule Consultation</h2>
                    <p className="text-sm text-gray-600">
                      Book a 30-minute call with our solutions architect.
                    </p>
                  </motion.div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">30 Minutes</h4>
                        <p className="text-xs text-gray-600">Quick discovery call</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Expert Guidance</h4>
                        <p className="text-xs text-gray-600">Solutions Architect</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Interaction Area */}
            <div className="lg:col-span-9">
              {step === 'datetime' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Calendar - 40% */}
                  <div className="md:col-span-5">
                    <p className="text-sm font-bold text-gray-900 mb-3">Select a Date</p>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={(date) => isBefore(date, startOfDay(new Date())) || date.getDay() === 0}
                        className="rounded-md w-full"
                      />
                    </div>
                  </div>

                  {/* Times - 60% */}
                  <div className="md:col-span-7">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-bold text-gray-900">
                        {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a date'}
                      </p>
                    </div>

                    <div className="max-h-[380px] overflow-y-auto pr-2">
                      {error && (
                        <div className="bg-red-50 text-red-600 rounded-lg p-3 mb-4 text-sm">
                          {error}
                        </div>
                      )}
                      {slotsLoading ? (
                        <div className="flex items-center justify-center py-12">
                          <Loader2 className="h-6 w-6 animate-spin text-[#9929ea]" />
                          <span className="ml-2 text-sm text-gray-600">Checking availability...</span>
                        </div>
                      ) : availableSlots.length > 0 ? (
                        <div className="space-y-5">
                          {/* Morning */}
                          {(() => {
                            const slots = availableSlots.filter(s => s.time.includes('AM') || (s.time.startsWith('12:') && s.time.includes('PM')));
                            return slots.length > 0 && (
                              <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Morning</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {slots.map((slot) => (
                                    <button
                                      key={slot.time}
                                      onClick={() => slot.available && handleTimeSelect(slot)}
                                      disabled={!slot.available}
                                      className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-between ${
                                        !slot.available
                                          ? "border-gray-50 bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                                          : selectedTime === slot.time
                                            ? "border-[#2DBFBA] bg-[#2DBFBA] text-white shadow-md"
                                            : "border-gray-100 bg-white text-gray-700 hover:border-[#2DBFBA] hover:text-[#2DBFBA]"
                                      }`}
                                      data-testid={`button-time-${slot.time.replace(/\s/g, '-')}`}
                                    >
                                      <span>{slot.time}</span>
                                      {selectedTime === slot.time && <CheckCircle2 className="h-4 w-4" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}

                          {/* Afternoon & Evening */}
                          {(() => {
                            const slots = availableSlots.filter(s => !s.time.includes('AM') && !(s.time.startsWith('12:') && s.time.includes('PM')));
                            return slots.length > 0 && (
                              <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Afternoon & Evening</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {slots.map((slot) => (
                                    <button
                                      key={slot.time}
                                      onClick={() => slot.available && handleTimeSelect(slot)}
                                      disabled={!slot.available}
                                      className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-between ${
                                        !slot.available
                                          ? "border-gray-50 bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                                          : selectedTime === slot.time
                                            ? "border-[#2DBFBA] bg-[#2DBFBA] text-white shadow-md"
                                            : "border-gray-100 bg-white text-gray-700 hover:border-[#2DBFBA] hover:text-[#2DBFBA]"
                                      }`}
                                      data-testid={`button-time-${slot.time.replace(/\s/g, '-')}`}
                                    >
                                      <span>{slot.time}</span>
                                      {selectedTime === slot.time && <CheckCircle2 className="h-4 w-4" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      ) : selectedDate ? (
                        <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                          <p className="text-gray-500 text-sm">No slots available for this date</p>
                        </div>
                      ) : null}
                    </div>

                    <button
                      onClick={handleContinueToForm}
                      disabled={!selectedDate || !selectedTime}
                      className="w-full mt-6 bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      data-testid="button-continue"
                    >
                      Confirm Selection
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                  </div>
                </div>
              ) : step === 'form' ? (
                <div className="max-w-xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Your Details</h3>
                    <button
                      onClick={() => setStep('datetime')}
                      className="flex items-center gap-1 text-sm font-medium text-[#9929ea] hover:underline"
                      data-testid="button-change-time"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <CalendarIcon className="h-6 w-6 text-[#9929ea]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedDate && format(selectedDate, 'EEEE, MMMM d')}
                      </p>
                      <p className="text-xs text-gray-600">{selectedTime} (30 mins)</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white"
                          placeholder="John Doe"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white"
                          placeholder="john@example.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white"
                          placeholder="+63 912 345 6789"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white"
                          placeholder="Acme Inc"
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Service of Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white appearance-none"
                        data-testid="select-service"
                      >
                        <option value="AI Web Development">AI Web Development</option>
                        <option value="AI App Development">AI App Development</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="AI Agents">AI Agents</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="AI/ML Development">AI/ML Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Project Details</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all bg-white resize-none"
                        placeholder="Tell us about what you're looking for..."
                        rows={3}
                        data-testid="textarea-message"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmBooking}
                    disabled={loading || !formData.name || !formData.email}
                    className="w-full mt-6 bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="button-confirm-booking"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Complete Booking
                        <CheckCircle2 className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    We'll send you a calendar invite and Zoom link
                  </p>
                </div>
              ) : step === 'success' && bookingConfirmation ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200"
                  >
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    A calendar invitation with the Zoom link has been sent to <span className="font-bold text-gray-900">{bookingConfirmation.email}</span>.
                  </p>

                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm max-w-sm mx-auto mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <CalendarIcon className="h-5 w-5 text-[#9929ea]" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-gray-900">{bookingConfirmation.formattedDate}</p>
                        <p className="text-xs text-gray-500">{bookingConfirmation.formattedTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleBookAnother}
                      className="px-8 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-all"
                    >
                      Book Another
                    </button>
                    <Link href="/">
                      <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold shadow-lg shadow-[#9929ea]/20">
                        Return Home
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
