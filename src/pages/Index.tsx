import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedUnits from '@/components/FeaturedUnits';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedUnits />
        <Amenities />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
