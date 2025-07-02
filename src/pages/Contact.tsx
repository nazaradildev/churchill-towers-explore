import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar,
  User,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitType: '',
    moveInDate: '',
    budget: '',
    message: ''
  });

  const leasingTeam = [
    {
      name: 'Sarah Al Mansouri',
      title: 'Senior Leasing Consultant',
      specialization: 'Luxury Penthouses & High-Floor Units',
      phone: '+971 50 XXX XXXX',
      email: 'sarah.almansouri@churchilltowers.ae',
      languages: ['English', 'Arabic', 'French'],
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c867?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'James Mitchell',
      title: 'International Client Specialist',
      specialization: 'Corporate Relocations & Family Units',
      phone: '+971 50 XXX XXXY',
      email: 'james.mitchell@churchilltowers.ae',
      languages: ['English', 'German', 'Spanish'],
      experience: '6+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      title: 'Residential Leasing Manager',
      specialization: 'Studio & 1-Bedroom Apartments',
      phone: '+971 50 XXX XXXZ',
      email: 'priya.sharma@churchilltowers.ae',
      languages: ['English', 'Hindi', 'Urdu'],
      experience: '5+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our leasing consultants',
      value: '+971 4 XXX XXXX',
      action: 'Call Now',
      available: '9:00 AM - 6:00 PM'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp',
      value: '+971 50 XXX XXXX',
      action: 'Message',
      available: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us your inquiries',
      value: 'leasing@churchilltowers.ae',
      action: 'Send Email',
      available: 'Response within 2 hours'
    },
    {
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Book a private viewing',
      value: 'Online Booking',
      action: 'Book Now',
      available: 'Same day appointments'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted Successfully",
      description: "Our leasing team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      unitType: '',
      moveInDate: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Contact Our Leasing Team
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Get personalized assistance from our expert consultants to find your perfect home
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Star className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-2">4.9/5</div>
                  <div className="text-white/80">Customer Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-2">&lt;2 Hours</div>
                  <div className="text-white/80">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-2">15+ Years</div>
                  <div className="text-white/80">Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred method of communication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="card-luxury group cursor-pointer text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-accent group-hover:text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-2 font-heading">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <div className="text-sm font-medium text-primary mb-3">
                        {method.value}
                      </div>
                      <div className="text-xs text-muted-foreground mb-4">
                        {method.available}
                      </div>
                      <Button size="sm" className="btn-accent w-full">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Form & Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <Card className="card-luxury">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                    Send Us an Inquiry
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+971 50 XXX XXXX"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="unitType">Preferred Unit Type</Label>
                        <Select value={formData.unitType} onValueChange={(value) => handleInputChange('unitType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="1br">1 Bedroom</SelectItem>
                            <SelectItem value="2br">2 Bedroom</SelectItem>
                            <SelectItem value="3br">3 Bedroom</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range (AED/year)</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="80k-120k">80,000 - 120,000</SelectItem>
                            <SelectItem value="120k-200k">120,000 - 200,000</SelectItem>
                            <SelectItem value="200k-300k">200,000 - 300,000</SelectItem>
                            <SelectItem value="300k-500k">300,000 - 500,000</SelectItem>
                            <SelectItem value="500k+">500,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                      <Input
                        id="moveInDate"
                        type="date"
                        value={formData.moveInDate}
                        onChange={(e) => handleInputChange('moveInDate', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your requirements, preferred view, move-in timeline, or any other details..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-accent" size="lg">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                
                {/* Office Information */}
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-6 font-heading">
                      Leasing Office
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium text-primary">Address</div>
                          <div className="text-muted-foreground">
                            Churchill Towers, Ground Floor<br />
                            Business Bay, Dubai, UAE
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium text-primary">Office Hours</div>
                          <div className="text-muted-foreground">
                            Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                            Friday: 9:00 AM - 1:00 PM<br />
                            Saturday: Closed
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium text-primary">Phone</div>
                          <div className="text-muted-foreground">
                            +971 4 XXX XXXX (Main Line)<br />
                            +971 50 XXX XXXX (WhatsApp)
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium text-primary">Email</div>
                          <div className="text-muted-foreground">
                            leasing@churchilltowers.ae
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Guarantee */}
                <Card className="card-luxury bg-gradient-primary text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 font-heading">
                      Our Service Promise
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span>Response within 2 hours during business days</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span>Same-day viewing appointments available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span>Multilingual support team</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span>Transparent pricing and lease terms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span>Dedicated move-in assistance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                Meet Your Leasing Specialists
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced team of leasing consultants is here to help you find the perfect home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leasingTeam.map((member, index) => (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                        {member.experience}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-3">{member.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.specialization}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {member.languages.map((lang, langIndex) => (
                        <Badge key={langIndex} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <Button size="sm" className="w-full btn-accent">
                        <Phone className="w-4 h-4 mr-2" />
                        Call {member.name.split(' ')[0]}
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;