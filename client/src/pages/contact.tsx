import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, "Please tell us a bit more about your project"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-cyan-900/20 to-blue-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Contact Us
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a clear vision or just a problem to solve, we're here to help you navigate the AI landscape.
          </p>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Let's Build Something <span className="bg-gradient-to-r from-[#9929ea] to-[#5808fb] bg-clip-text text-transparent">Incredible</span></h2>
              <p className="text-xl text-muted-foreground mb-12">
                Whether you have a clear vision or just a problem to solve, we're here to help you navigate the AI landscape.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Calendar, title: "Book a Consultation", desc: "Directly schedule a time with our solutions architect.", link: true, color: "from-cyan-500 to-blue-500" },
                  { icon: Mail, title: "Email Us", desc: "hello@iscalestudio.com", color: "from-purple-500 to-pink-500" },
                  { icon: MessageSquare, title: "Live Chat", desc: "Available Mon-Fri, 9am - 6pm EST", color: "from-orange-500 to-red-500" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.desc}</p>
                      {item.link && <Button variant="link" className="text-[#9929ea] p-0 h-auto">View Calendar &rarr;</Button>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl"
            >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-black/20 border-white/10 focus:border-cyan-400 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="bg-black/20 border-white/10 focus:border-cyan-400 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/20 border-white/10 focus:border-cyan-400 transition-colors">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-dev">AI Web & App Development</SelectItem>
                          <SelectItem value="automation">Workflow Automation</SelectItem>
                          <SelectItem value="ai-agent">AI Agent Development</SelectItem>
                          <SelectItem value="consulting">General Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your goals, timeline, and budget..." 
                          className="min-h-[150px] bg-black/20 border-white/10 focus:border-cyan-400 transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full btn-gradient text-white border-0 h-12 font-bold">
                  Send Message
                </Button>
              </form>
            </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
