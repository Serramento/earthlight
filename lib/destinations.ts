export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  activities: string[];
}

export const destinations: Record<string, Destination[]> = {
  europe: [
    {
      id: "santorini",
      title: "Santorini, Greece",
      description: "Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      highlights: [
        "Iconic blue-domed churches",
        "Spectacular caldera views",
        "Traditional Greek villages",
        "World-famous sunsets"
      ],
      activities: [
        "Wine tasting tours",
        "Sailing excursions",
        "Archaeological site visits",
        "Beach hopping"
      ]
    },
    // Add more European destinations...
  ],
  asia: [
    {
      id: "bali",
      title: "Bali, Indonesia",
      description: "Discover tropical paradise with rich culture and pristine beaches.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      highlights: [
        "Ancient temples",
        "Rice terraces",
        "Vibrant culture",
        "Pristine beaches"
      ],
      activities: [
        "Temple tours",
        "Surfing lessons",
        "Cooking classes",
        "Spa treatments"
      ]
    },
    // Add more Asian destinations...
  ]
};