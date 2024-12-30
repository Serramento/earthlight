import Image from "next/image";
import Link from "next/link";
import { Star, Hotel, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoBackground } from "@/components/ui/video-background";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <VideoBackground 
          src="https://video.wixstatic.com/video/31fb8b_ff06ce69847e4497be30ffd66b923974/480p/mp4/file.mp4"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Experience Luxury Travel Like Never Before
            </h1>
            <p className="text-xl md:text-2xl">
              Discover extraordinary destinations and create unforgettable memories
            </p>
            <Button size="lg" asChild>
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Destinations</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our hand-picked selection of extraordinary locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.title} className="overflow-hidden">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>{destination.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {destination.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={destination.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Earthlight Travel</h2>
            <p className="mt-4 text-lg text-gray-600">
              We create extraordinary travel experiences tailored to your desires
            </p>
          </div>
          
       
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">
            Contact us today to plan your perfect luxury travel experience
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const featuredDestinations = [
  {
    title: "Santorini, Greece",
    description: "Experience the magic of white-washed buildings and stunning sunsets.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    href: "/destinations/europe/greece/santorini",
  },
  {
    title: "Bali, Indonesia",
    description: "Discover tropical paradise with rich culture and pristine beaches.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    href: "/destinations/asia/indonesia/bali",
  },
  {
    title: "Machu Picchu, Peru",
    description: "Explore ancient Incan ruins in the heart of the Andes.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    href: "/destinations/americas/peru/machu-picchu",
  },
];