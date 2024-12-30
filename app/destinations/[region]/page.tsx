import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/destinations";

export function generateMetadata({ params }: { params: { region: string } }) {
  const region = params.region;
  const title = region.charAt(0).toUpperCase() + region.slice(1);
  
  return {
    title: `${title} Travel Destinations | Earthlight Travel`,
    description: `Discover amazing travel destinations in ${title} with Earthlight Travel. Luxury accommodations and unforgettable experiences.`,
  };
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const regionDestinations = destinations[params.region];

  if (!regionDestinations) {
    notFound();
  }

  const regionTitle = params.region.charAt(0).toUpperCase() + params.region.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Destinations in {regionTitle}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover extraordinary travel experiences across {regionTitle}'s most remarkable destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{destination.title}</CardTitle>
                <CardDescription className="mt-2">
                  {destination.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/destinations/${params.region}/${destination.id}`}>
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}