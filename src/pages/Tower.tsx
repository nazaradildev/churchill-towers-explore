import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Users, Award, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-towers.jpg';
import luxuryApartment from '@/assets/luxury-apartment.jpg';

const Tower = () => {
  const towerStats = [
    { label: 'Total Floors', value: '45', icon: Building },
    { label: 'Residential Units', value: '618', icon: Users },
    { label: 'Completion Year', value: '2018', icon: Calendar },
    { label: 'LEED Certified', value: 'Gold', icon: Award },
  ];

  const floorPlans = [
    {
      type: 'Studio',
      area: '450 - 750 sq ft',
      units: 85,
      starting: 'AED 85,000',
      image: luxuryApartment,
    },
    {
      type: '1 Bedroom',
      area: '850 - 1,200 sq ft', 
      units: 195,
      starting: 'AED 125,000',
      image: luxuryApartment,
    },
    {
      type: '2 Bedroom',
      area: '1,400 - 1,900 sq ft',
      units: 210,
      starting: 'AED 175,000', 
      image: luxuryApartment,
    },
    {
      type: '3 Bedroom',
      area: '2,100 - 2,800 sq ft',
      units: 98,
      starting: 'AED 265,000',
      image: luxuryApartment,
    },
    {
      type: 'Penthouse',
      area: '3,200 - 5,500 sq ft',
      units: 30,
      starting: 'AED 450,000',
      image: luxuryApartment,
    },
  ];

  const buildingFeatures = [
    {
      title: 'Architectural Excellence',
      description: 'Modern glass facade with premium materials and sustainable design elements',
      features: ['Floor-to-ceiling windows', 'Premium marble lobbies', 'Smart building technology']
    },
    {
      title: 'Prime Location',
      description: 'Strategically located in Business Bay with unparalleled connectivity',
      features: ['Walking distance to metro', 'Direct highway access', 'Central Dubai location']
    },
    {
      title: 'Luxury Finishes',
      description: 'European kitchen appliances and high-end finishes throughout',
      features: ['Gaggenau appliances', 'Italian marble', 'Premium hardwood flooring']
    },
    {
      title: 'Smart Living',
      description: 'Integrated smart home systems and modern conveniences',
      features: ['Smart home automation', 'High-speed fiber internet', 'Climate control systems']
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Iconic Architecture
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                Churchill Towers
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                A masterpiece of modern architecture rising 45 floors above Dubai's prestigious Business Bay
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {towerStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tower Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-section text-primary mb-6">
                    Architectural Marvel in Business Bay
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Churchill Towers stands as a testament to modern architectural excellence, 
                    offering residents an unparalleled living experience in the heart of Dubai's 
                    business district. The tower's distinctive design and premium amenities make 
                    it one of the most sought-after residential addresses in the city.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Developed by Emirates National Investment (ENI), Churchill Towers represents 
                    the perfect blend of luxury, convenience, and sophisticated urban living. 
                    Every detail has been carefully considered to provide residents with the 
                    finest in contemporary lifestyle.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-accent">
                      Schedule Building Tour
                    </Button>
                    <Button variant="outline" className="btn-ghost">
                      Download Brochure
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Churchill Towers"
                    className="rounded-2xl shadow-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-section text-primary mb-4">
                Floor Plans & Unit Types
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from a variety of meticulously designed floor plans, each crafted to maximize 
                space, natural light, and stunning views of Dubai's skyline
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {floorPlans.map((plan, index) => (
                <Card key={index} className="card-luxury group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={plan.image}
                      alt={`${plan.type} floor plan`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {plan.units} Units
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                      {plan.type}
                    </h3>
                    <p className="text-muted-foreground mb-4">{plan.area}</p>
                    <div className="text-2xl font-bold text-accent mb-4">
                      {plan.starting}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Starting from (per year)
                    </div>
                    <Button className="w-full btn-accent" size="sm">
                      View Floor Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="btn-accent">
                Download All Floor Plans
              </Button>
            </div>
          </div>
        </section>

        {/* Building Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-section text-primary mb-4">
                Building Features & Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the exceptional features and premium specifications that make 
                Churchill Towers a benchmark for luxury living in Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {buildingFeatures.map((feature, index) => (
                <Card key={index} className="card-luxury">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Info */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Developed by Emirates National Investment
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                ENI is a leading real estate developer in the UAE, known for creating 
                exceptional residential and commercial properties that set new standards 
                in design, quality, and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">25+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-white/80">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
                  <div className="text-white/80">Happy Residents</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Learn More About ENI
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Other Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                Ready to Make Churchill Towers Your Home?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our leasing specialists to schedule a private tour and learn more about available units
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="btn-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +971 4 XXX XXXX
                </Button>
                <Button size="lg" variant="outline" className="btn-ghost">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Sales Office
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tower;