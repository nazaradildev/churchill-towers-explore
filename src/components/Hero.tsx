import { Button } from '@/components/ui/button';
import { Search, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-towers.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* ENI Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">معتمد من الإمارات الوطنية للاستثمار</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero mb-6 leading-tight">
            اكتشف منزلك الفاخر في
            <br />
            <span className="text-accent">أبراج شيرشل</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            تجربة استئجار لا مثيل لها في قلب الخليج التجاري مع إطلالات خلابة على برج خليفة وقناة دبي المائية
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-10 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">الخليج التجاري، دبي</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="btn-accent w-full sm:w-auto text-lg px-8 py-3">
              <Search className="w-5 h-5 mr-2 ml-0" />
              ابحث عن منزلك
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost w-full sm:w-auto text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary">
              احجز معاينة
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">618</div>
              <div className="text-sm md:text-base text-white/80">وحدة سكنية</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">45</div>
              <div className="text-sm md:text-base text-white/80">طابق</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm md:text-base text-white/80">مرفق متميز</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;