import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, Eye, Heart } from 'lucide-react';
import luxuryApartment from '@/assets/luxury-apartment.jpg';

const FeaturedUnits = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'بنتهاوس فاخر - الطابق 45',
      price: 'AED 350,000',
      period: 'سنوياً',
      bedrooms: 4,
      bathrooms: 5,
      area: 3200,
      view: 'إطلالة على برج خليفة',
      features: ['مجدد حديثاً', 'طابق مرتفع', 'مفروش بالكامل'],
      image: luxuryApartment,
      isNew: true,
    },
    {
      id: 2,
      title: 'شقة عصرية - غرفتين نوم',
      price: 'AED 180,000',
      period: 'سنوياً',
      bedrooms: 2,
      bathrooms: 3,
      area: 1650,
      view: 'إطلالة على القناة',
      features: ['مناسب للعائلات', 'إطلالة مائية', 'تشطيبات عالية'],
      image: luxuryApartment,
      isNew: false,
    },
    {
      id: 3,
      title: 'ستوديو راقي مع بلكونة',
      price: 'AED 95,000',
      period: 'سنوياً',
      bedrooms: 1,
      bathrooms: 1,
      area: 750,
      view: 'إطلالة على المدينة',
      features: ['صديق للميزانية', 'مثالي للشباب', 'تصميم ذكي'],
      image: luxuryApartment,
      isNew: false,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary mb-4">
            الوحدات المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة مختارة من أفضل الوحدات المتاحة في أبراج شيرشل مع مواصفات استثنائية وإطلالات خلابة
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="card-luxury group cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.isNew && (
                    <Badge className="bg-accent text-accent-foreground">جديد</Badge>
                  )}
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    {property.view}
                  </Badge>
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Price */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {property.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{property.period}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-4 font-heading">
                  {property.title}
                </h3>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.area.toLocaleString()} قدم²</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full btn-accent">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-ghost">
            عرض جميع الوحدات المتاحة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUnits;