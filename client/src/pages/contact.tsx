import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  HelpCircle,
  Bug,
  Lightbulb,
  CreditCard,
  Users
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // In a real implementation, this would send the form data to your backend
      console.log("Contact form submission:", data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Thank you for contacting us!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "support@ideavidator.com",
      action: "mailto:support@ideavidator.com",
      color: "bg-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      value: "Available 9 AM - 6 PM EST",
      action: "#",
      color: "bg-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Pro & Team plans only",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "bg-purple-600"
    }
  ];

  const supportCategories = [
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Questions about features, account, or billing",
      response: "< 24 hours",
      color: "bg-blue-600"
    },
    {
      icon: Bug,
      title: "Technical Issues",
      description: "Report bugs or technical problems",
      response: "< 12 hours",
      color: "bg-red-600"
    },
    {
      icon: Lightbulb,
      title: "Feature Requests",
      description: "Suggest new features or improvements",
      response: "< 48 hours",
      color: "bg-yellow-600"
    },
    {
      icon: CreditCard,
      title: "Billing & Sales",
      description: "Billing questions or sales inquiries",
      response: "< 6 hours",
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary-blue to-baby-blue bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-baby-blue max-w-3xl mx-auto">
              Have questions about IdeaValidator? Need help with your validation? 
              Our support team is here to help you succeed.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Send className="text-primary-blue" size={24} />
                      <span className="font-sora">Send us a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-baby-blue">Name *</Label>
                          <Input
                            id="name"
                            {...form.register("name")}
                            className="bg-dark-blue bg-opacity-50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-blue"
                            placeholder="Your full name"
                          />
                          {form.formState.errors.name && (
                            <p className="text-red-400 text-sm">{form.formState.errors.name.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-baby-blue">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...form.register("email")}
                            className="bg-dark-blue bg-opacity-50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-blue"
                            placeholder="your.email@example.com"
                          />
                          {form.formState.errors.email && (
                            <p className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-baby-blue">Category *</Label>
                          <Select onValueChange={(value) => form.setValue("category", value)}>
                            <SelectTrigger className="bg-dark-blue bg-opacity-50 border-gray-600 text-white">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Support</SelectItem>
                              <SelectItem value="technical">Technical Issues</SelectItem>
                              <SelectItem value="billing">Billing & Sales</SelectItem>
                              <SelectItem value="feature">Feature Request</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {form.formState.errors.category && (
                            <p className="text-red-400 text-sm">{form.formState.errors.category.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-baby-blue">Subject *</Label>
                          <Input
                            id="subject"
                            {...form.register("subject")}
                            className="bg-dark-blue bg-opacity-50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-blue"
                            placeholder="Brief subject line"
                          />
                          {form.formState.errors.subject && (
                            <p className="text-red-400 text-sm">{form.formState.errors.subject.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-baby-blue">Message *</Label>
                        <Textarea
                          id="message"
                          {...form.register("message")}
                          className="min-h-[120px] bg-dark-blue bg-opacity-50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-blue"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                        />
                        {form.formState.errors.message && (
                          <p className="text-red-400 text-sm">{form.formState.errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-main hover:opacity-90 py-3 rounded-full font-semibold transition-all duration-300"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2" size={20} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="font-sora">Contact Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a 
                        key={index}
                        href={method.action}
                        className="flex items-center space-x-4 p-4 bg-dark-blue bg-opacity-50 rounded-lg hover:bg-primary-blue hover:bg-opacity-20 transition-all duration-200"
                      >
                        <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-baby-blue text-sm">{method.description}</p>
                          <p className="text-primary-blue text-sm font-medium">{method.value}</p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>

                {/* Support Categories */}
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="font-sora">Support Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportCategories.map((category, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-dark-blue bg-opacity-50 rounded-lg">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <category.icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold">{category.title}</h3>
                            <Badge className="bg-primary-blue text-white text-xs">
                              {category.response}
                            </Badge>
                          </div>
                          <p className="text-baby-blue text-sm">{category.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Office Information */}
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="text-primary-blue" size={24} />
                      <span className="font-sora">Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary-blue mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold">Headquarters</p>
                        <p className="text-baby-blue text-sm">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="text-primary-blue mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-baby-blue text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Help Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-sora font-bold text-center mb-12">
                Need Quick Help?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <HelpCircle className="mx-auto text-primary-blue mb-4" size={48} />
                    <h3 className="font-sora font-semibold text-lg mb-3">FAQ</h3>
                    <p className="text-baby-blue mb-6 text-sm">
                      Check our comprehensive FAQ section for instant answers to common questions.
                    </p>
                    <a href="/faq">
                      <Button className="bg-primary-blue hover:bg-midnight-blue w-full">
                        View FAQ
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <Users className="mx-auto text-green-400 mb-4" size={48} />
                    <h3 className="font-sora font-semibold text-lg mb-3">Community</h3>
                    <p className="text-baby-blue mb-6 text-sm">
                      Join our community of entrepreneurs and get help from fellow users.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      Join Community
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <CheckCircle className="mx-auto text-yellow-400 mb-4" size={48} />
                    <h3 className="font-sora font-semibold text-lg mb-3">Status Page</h3>
                    <p className="text-baby-blue mb-6 text-sm">
                      Check our system status and service availability in real-time.
                    </p>
                    <Button className="bg-yellow-600 hover:bg-yellow-700 w-full">
                      Check Status
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
