import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Bed, Bath, Square, Eye, Heart, Filter, Grid, List, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import luxuryApartment from '@/assets/luxury-apartment.jpg';

const Rent = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [selectedFilters, setSelectedFilters] = useState({
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    view: '',
    amenities: [] as string[],
  });

  const properties = [
    {
      id: 1,
      title: 'Luxury Penthouse - 45th Floor',
      price: 350000,
      bedrooms: 4,
      bathrooms: 5,
      area: 3200,
      floor: 45,
      view: 'Burj Khalifa View',
      features: ['Recently Renovated', 'High Floor', 'Fully Furnished'],
      image: luxuryApartment,
      isNew: true,
      available: true,
    },
    {
      id: 2,
      title: 'Modern 2-Bedroom Apartment',
      price: 180000,
      bedrooms: 2,
      bathrooms: 3,
      area: 1650,
      floor: 32,
      view: 'Canal View',
      features: ['Family Friendly', 'Water View', 'Premium Finishes'],
      image: luxuryApartment,
      isNew: false,
      available: true,
    },
    {
      id: 3,
      title: 'Premium Studio with Balcony',
      price: 95000,
      bedrooms: 1,
      bathrooms: 1,
      area: 750,
      floor: 18,
      view: 'City View',
      features: ['Budget Friendly', 'Perfect for Young Professionals', 'Smart Design'],
      image: luxuryApartment,
      isNew: false,
      available: true,
    },
    {
      id: 4,
      title: 'Spacious 3-Bedroom Family Unit',
      price: 280000,
      bedrooms: 3,
      bathrooms: 4,
      area: 2400,
      floor: 28,
      view: 'Dubai Fountain View',
      features: ['Family Oriented', 'Large Balcony', 'Maid Room'],
      image: luxuryApartment,
      isNew: true,
      available: true,
    },
    {
      id: 5,
      title: 'Executive 1-Bedroom Suite',
      price: 145000,
      bedrooms: 1,
      bathrooms: 2,
      area: 1200,
      floor: 35,
      view: 'Marina View',
      features: ['Executive Floor', 'Study Room', 'Premium Location'],
      image: luxuryApartment,
      isNew: false,
      available: true,
    },
    {
      id: 6,
      title: 'Corner Unit with Panoramic Views',
      price: 420000,
      bedrooms: 5,
      bathrooms: 6,
      area: 4200,
      floor: 42,
      view: '360° City View',
      features: ['Corner Unit', 'Panoramic Views', 'Private Elevator'],
      image: luxuryApartment,
      isNew: true,
      available: true,
    },
  ];

  const amenityOptions = [
    'Burj Khalifa View',
    'Canal View', 
    'High Floor',
    'Recently Renovated',
    'Fully Furnished',
    'Maid Room',
    'Study Room',
    'Large Balcony',
    'Corner Unit',
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Find Your Perfect Home
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explore available units in Churchill Towers with advanced search and filtering
              </p>
              
              {/* Quick Search */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select>
                    <SelectTrigger className="bg-white text-primary">
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4+">4+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="bg-white text-primary">
                      <SelectValue placeholder="View Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="burj">Burj Khalifa</SelectItem>
                      <SelectItem value="canal">Canal View</SelectItem>
                      <SelectItem value="city">City View</SelectItem>
                      <SelectItem value="marina">Marina View</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Input 
                    placeholder="Max Budget (AED)" 
                    className="bg-white text-primary"
                  />
                  
                  <Button className="bg-accent hover:bg-accent/90 text-white">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-semibold">Filter Results</h3>
                    </div>
                    
                    {/* Price Range */}
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">Price Range (AED)</Label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500000}
                        min={50000}
                        step={10000}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()}</span>
                        <span>{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">Bedrooms</Label>
                      <Select value={selectedFilters.bedrooms} onValueChange={(value) => 
                        setSelectedFilters(prev => ({...prev, bedrooms: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4+">4+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* View Type */}
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">View Type</Label>
                      <Select value={selectedFilters.view} onValueChange={(value) => 
                        setSelectedFilters(prev => ({...prev, view: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any View" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="burj">Burj Khalifa View</SelectItem>
                          <SelectItem value="canal">Canal View</SelectItem>
                          <SelectItem value="city">City View</SelectItem>
                          <SelectItem value="marina">Marina View</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <Label className="text-sm font-medium mb-3 block">Features & Amenities</Label>
                      <div className="space-y-3 max-h-60 overflow-y-auto">
                        {amenityOptions.map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox
                              id={amenity}
                              checked={selectedFilters.amenities.includes(amenity)}
                              onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                            />
                            <Label
                              htmlFor={amenity}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {amenity}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full btn-accent">
                      Apply Filters
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">Available Units</h2>
                    <p className="text-muted-foreground">{properties.length} properties found</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="size">Size: Largest First</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex border rounded-lg">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="rounded-r-none"
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="rounded-l-none"
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Properties Grid/List */}
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
                  : 'space-y-6'
                }>
                  {properties.map((property) => (
                    <Card key={property.id} className="card-luxury group cursor-pointer overflow-hidden">
                      <div className={viewMode === 'grid' ? '' : 'flex'}>
                        <div className={`relative ${viewMode === 'grid' ? '' : 'w-1/3'}`}>
                          <img
                            src={property.image}
                            alt={property.title}
                            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                              viewMode === 'grid' ? 'w-full h-64' : 'w-full h-full min-h-48'
                            }`}
                          />
                          
                          {/* Overlay badges */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {property.isNew && (
                              <Badge className="bg-accent text-accent-foreground">New</Badge>
                            )}
                            <Badge variant="secondary" className="bg-black/50 text-white border-none">
                              Floor {property.floor}
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

                        <CardContent className={`p-6 ${viewMode === 'grid' ? '' : 'flex-1'}`}>
                          {/* Price */}
                          <div className="mb-4">
                            <div className="text-2xl font-bold text-primary mb-1">
                              AED {property.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-muted-foreground">per year</div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-semibold text-primary mb-4 font-heading">
                            {property.title}
                          </h3>

                          {/* View */}
                          <div className="flex items-center gap-2 mb-4 text-accent">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">{property.view}</span>
                          </div>

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
                              <span>{property.area.toLocaleString()} sq ft</span>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1 mb-6">
                            {property.features.slice(0, 3).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button className="w-full btn-accent">
                            View Details & Tour
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="btn-ghost">
                    Load More Properties
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rent;