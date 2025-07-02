import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Wifi, 
  TreePine,
  Users,
  Gamepad2,
  Baby,
  ShoppingBag,
  Building,
  Utensils
} from 'lucide-react';
import poolImage from '@/assets/pool-amenities.jpg';

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: 'مسبح لا متناهي',
      description: 'مسبح خارجي على السطح مع إطلالة 360 درجة على أفق دبي',
      featured: true
    },
    {
      icon: Dumbbell,
      title: 'صالة رياضية متطورة',
      description: 'أحدث المعدات الرياضية مع مدرب شخصي متاح'
    },
    {
      icon: Shield,
      title: 'أمن على مدار الساعة',
      description: 'نظام أمني متقدم مع خدمة الكونسيرج'
    },
    {
      icon: Car,
      title: 'مواقف سيارات مخصصة',
      description: 'مواقف مغطاة ومكيفة مع خدمة صف السيارات'
    },
    {
      icon: Wifi,
      title: 'إنترنت فائق السرعة',
      description: 'شبكة فايبر بسرعة 1 جيجابت في جميع الوحدات'
    },
    {
      icon: TreePine,
      title: 'حدائق مناظر طبيعية',
      description: 'مساحات خضراء واسعة ومناطق استرخاء خارجية'
    },
    {
      icon: Users,
      title: 'قاعات اجتماعات',
      description: 'مساحات للفعاليات والاجتماعات بإطلالات مذهلة'
    },
    {
      icon: Gamepad2,
      title: 'منطقة ألعاب',
      description: 'غرفة ألعاب مجهزة بالكامل وطاولات بلياردو'
    },
    {
      icon: Baby,
      title: 'منطقة لعب الأطفال',
      description: 'ملعب آمن ومجهز للأطفال من جميع الأعمار'
    },
    {
      icon: ShoppingBag,
      title: 'متاجر ومقاهي',
      description: 'متاجر راقية ومقاهي في الطابق الأرضي'
    },
    {
      icon: Building,
      title: 'مركز أعمال',
      description: 'مكاتب مجهزة بالكامل للعمل من المنزل'
    },
    {
      icon: Utensils,
      title: 'مطاعم فاخرة',
      description: 'مجموعة متنوعة من المطاعم العالمية'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary mb-4">
            وسائل الراحة الاستثنائية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استمتع بأسلوب حياة فاخر مع مرافق عالمية المستوى تلبي جميع احتياجاتك اليومية والترفيهية
          </p>
        </div>

        {/* Featured Amenity */}
        <div className="mb-16">
          <Card className="card-luxury overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto min-h-[400px]">
                <img
                  src={poolImage}
                  alt="مسبح لا متناهي"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                    <Waves className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary font-heading">
                      مسبح لا متناهي على السطح
                    </h3>
                    <p className="text-muted-foreground">المرفق المميز</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  يقع على الطابق 46، يوفر مسبحنا اللامتناهي تجربة سباحة مذهلة مع إطلالات بانورامية على 
                  برج خليفة وقناة دبي المائية. مزود بمنطقة جاكوزي وشاطئ صناعي للاسترخاء.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">25م</div>
                    <div className="text-sm text-muted-foreground">طول المسبح</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">46</div>
                    <div className="text-sm text-muted-foreground">رقم الطابق</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">360°</div>
                    <div className="text-sm text-muted-foreground">إطلالة</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.slice(1).map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={index} className="card-luxury group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-secondary rounded-lg w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 font-heading">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              جرب أسلوب الحياة الفاخر
            </h3>
            <p className="text-lg mb-6 text-white/90">
              احجز جولة شخصية لاستكشاف جميع المرافق والاستمتاع بتجربة أبراج شيرشل الاستثنائية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                احجز جولة
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                تحميل الكتيب
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;