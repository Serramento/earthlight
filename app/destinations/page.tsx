import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Travel Destinations | Earthlight Travel",
  description: "Explore our curated selection of luxury travel destinations across the globe. Find your perfect getaway with Earthlight Travel.",
};

const regions = [
  {
    id: "europe",
    title: "Europe",
    description: "Discover the rich history and cultural heritage of European destinations.",
    image: "https://images.unsplash.com/photo-1471874276752-65e2d717604a"
  },
  {
    id: "asia",
    title: "Asia",
    description: "Experience the mystique and traditions of Asian countries.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd"
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Destinations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover extraordinary travel experiences across the globe's most remarkable regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {regions.map((region) => (
            <Card key={region.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <img
                    src={region.image}
                    alt={region.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{region.title}</CardTitle>
                <CardDescription className="mt-2">
                  {region.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/destinations/${region.id}`}>Explore {region.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}