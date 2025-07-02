import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Train, Plane, ShoppingBag, Utensils, GraduationCap, Hospital } from 'lucide-react';

const Location = () => {
  const nearbyPlaces = [
    {
      category: 'مراكز التسوق',
      icon: ShoppingBag,
      places: [
        { name: 'دبي مول', distance: '2.5 كم', time: '5 دقائق بالسيارة' },
        { name: 'سوق البحار', distance: '1.2 كم', time: '3 دقائق بالسيارة' },
        { name: 'مركز دبي المالي العالمي', distance: '800 م', time: 'دقيقتان بالسيارة' }
      ]
    },
    {
      category: 'المطاعم والمقاهي',
      icon: Utensils,
      places: [
        { name: 'مطاعم برج خليفة', distance: '2.8 كم', time: '6 دقائق بالسيارة' },
        { name: 'مطاعم الخليج التجاري', distance: '500 م', time: 'دقيقة واحدة مشياً' },
        { name: 'دبي مارينا', distance: '15 كم', time: '20 دقيقة بالسيارة' }
      ]
    },
    {
      category: 'التعليم',
      icon: GraduationCap,
      places: [
        { name: 'مدرسة دبي الدولية', distance: '3.5 كم', time: '8 دقائق بالسيارة' },
        { name: 'الجامعة الأمريكية', distance: '5 كم', time: '12 دقيقة بالسيارة' },
        { name: 'كلية دبي الطبية', distance: '4.2 كم', time: '10 دقائق بالسيارة' }
      ]
    },
    {
      category: 'الخدمات الطبية',
      icon: Hospital,
      places: [
        { name: 'مستشفى دبي', distance: '2.1 كم', time: '5 دقائق بالسيارة' },
        { name: 'مستشفى الإمارات', distance: '3.8 كم', time: '9 دقائق بالسيارة' },
        { name: 'عيادات ميدكير', distance: '1.5 كم', time: '4 دقائق بالسيارة' }
      ]
    }
  ];

  const transportation = [
    {
      icon: Train,
      title: 'مترو دبي',
      description: 'محطة الخليج التجاري',
      distance: '400 م',
      time: '5 دقائق مشياً'
    },
    {
      icon: Car,
      title: 'الطرق الرئيسية',
      description: 'شارع الشيخ زايد',
      distance: '200 م',
      time: 'وصول مباشر'
    },
    {
      icon: Plane,
      title: 'مطار دبي الدولي',
      description: 'DXB Airport',
      distance: '15 كم',
      time: '20 دقيقة بالسيارة'
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary mb-4">
            موقع استراتيجي في قلب دبي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            يقع أبراج شيرشل في منطقة الخليج التجاري المرموقة، مما يوفر سهولة الوصول إلى أهم معالم دبي ومراكز الأعمال
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <Card className="card-luxury overflow-hidden">
            <div className="bg-gradient-primary text-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="text-xl font-bold font-heading">الخليج التجاري، دبي</h3>
                  <p className="text-white/80">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              
              {/* Transportation Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {transportation.map((transport, index) => {
                  const IconComponent = transport.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-5 h-5 text-accent" />
                        <span className="font-semibold">{transport.title}</span>
                      </div>
                      <p className="text-sm text-white/80 mb-1">{transport.description}</p>
                      <div className="flex items-center gap-4 text-xs text-white/70">
                        <span>{transport.distance}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {transport.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">خريطة تفاعلية</h4>
                <p className="text-muted-foreground">اكتشف الموقع والمعالم القريبة</p>
                <Button className="mt-4 btn-accent">
                  عرض الخريطة التفاعلية
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Nearby Places */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {nearbyPlaces.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent text-accent-foreground rounded-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary font-heading">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.places.map((place, placeIndex) => (
                      <div key={placeIndex} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                        <div>
                          <h4 className="font-medium text-primary">{place.name}</h4>
                          <p className="text-sm text-muted-foreground">{place.distance}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{place.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              لماذا الخليج التجاري؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5 دقائق</div>
                <p className="text-white/90">إلى دبي مول وبرج خليفة</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">400 م</div>
                <p className="text-white/90">إلى محطة مترو دبي</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <p className="text-white/90">مطعم ومقهى قريب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;