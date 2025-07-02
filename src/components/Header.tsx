import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'استئجار', href: '/rent' },
    { name: 'البرج', href: '/tower' },
    { name: 'وسائل الراحة', href: '/amenities' },
    { name: 'الموقع', href: '/location' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-luxury">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm border-b border-primary-foreground/20">
          <div className="flex items-center gap-6">
            <a href="tel:+971-4-XXX-XXXX" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+971 4 XXX XXXX</span>
            </a>
            <a href="mailto:rent@churchilltowers.ae" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>rent@churchilltowers.ae</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold">
              أبراج <span className="text-accent">شيرشل</span>
            </h1>
            <div className="hidden md:block ml-3 text-sm text-muted-foreground">
              by ENI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-accent">
              احجز معاينة
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-accent mt-4 w-full">
                احجز معاينة
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;