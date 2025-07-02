import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'استئجار', href: '/rent' },
    { name: 'البرج', href: '/tower' },
    { name: 'وسائل الراحة', href: '/amenities' },
    { name: 'الموقع', href: '/location' },
    { name: 'اتصل بنا', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'عن الإمارات الوطنية للاستثمار', href: '/about-eni' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
    { name: 'شروط الاستخدام', href: '/terms' },
    { name: 'اتفاقية الإيجار', href: '/lease-agreement' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold font-heading mb-2">
                  أبراج <span className="text-accent">شيرشل</span>
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  by Emirates National Investment (ENI)
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  تجربة استئجار فاخرة في قلب الخليج التجاري مع أرقى المعايير العالمية في الخدمة والجودة.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold font-heading mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold font-heading mb-6">معلومات التواصل</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">
                      أبراج شيرشل، الخليج التجاري<br />
                      دبي، الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <a href="tel:+971-4-XXX-XXXX" className="text-primary-foreground/80 hover:text-accent transition-colors">
                      +971 4 XXX XXXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <a href="mailto:rent@churchilltowers.ae" className="text-primary-foreground/80 hover:text-accent transition-colors">
                      rent@churchilltowers.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours & Legal */}
            <div>
              <h4 className="text-lg font-semibold font-heading mb-6">ساعات العمل</h4>
              <div className="space-y-2 mb-6">
                <p className="text-primary-foreground/80">
                  <span className="font-medium">الأحد - الخميس:</span> 9:00 ص - 6:00 م
                </p>
                <p className="text-primary-foreground/80">
                  <span className="font-medium">الجمعة:</span> 9:00 ص - 1:00 م
                </p>
                <p className="text-primary-foreground/80">
                  <span className="font-medium">السبت:</span> مغلق
                </p>
              </div>
              
              <div>
                <h5 className="font-medium mb-3">روابط قانونية</h5>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 أبراج شيرشل. جميع الحقوق محفوظة. | طُوّر بواسطة شركة الإمارات الوطنية للاستثمار (ENI)
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <span>مرخص من هيئة دبي للأراضي والأملاك</span>
              <span>•</span>
              <span>RERA ORN: 12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;