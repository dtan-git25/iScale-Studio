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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-display font-bold mb-6">Let's Build Something <span className="text-cyan-400">Incredible</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you have a clear vision or just a problem to solve, we're here to help you navigate the AI landscape.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Book a Consultation</h3>
                  <p className="text-muted-foreground mb-2">Directly schedule a time with our solutions architect.</p>
                  <Button variant="link" className="text-cyan-400 p-0 h-auto">View Calendar &rarr;</Button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-muted-foreground">hello@iscalestudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-pink-500/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Live Chat</h3>
                  <p className="text-muted-foreground">Available Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
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
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 h-12 font-bold">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
