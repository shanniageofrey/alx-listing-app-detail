// constants/index.tsx
export const PROPERTYLISTINGSAMPLE = [
  {
    name: "Serengeti Villa",
    rating: 4.8,
    address: {
      city: "Arusha",
      country: "Tanzania",
    },
    image: "https://source.unsplash.com/featured/?villa",
    images: [
      "https://source.unsplash.com/featured/?pool",
      "https://source.unsplash.com/featured/?bedroom",
    ],
    description:
      "A peaceful retreat in the heart of Serengeti, this villa offers stunning views and modern amenities.",
    category: ["Wi-Fi", "Swimming Pool", "Parking", "Private Chef"],
    price: 120,
    reviews: [
      {
        name: "Amina J.",
        rating: 5,
        comment: "Absolutely loved this place! Clean, quiet and beautiful views.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "John D.",
        rating: 4,
        comment: "Great location and amenities. Would definitely stay again.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
  },

  {
    name: "Ngorongoro Cabin",
    rating: 4.5,
    address: {
      city: "Karatu",
      country: "Tanzania",
    },
    image: "https://source.unsplash.com/featured/?cabin",
    images: [
      "https://source.unsplash.com/featured/?nature",
      "https://source.unsplash.com/featured/?interior",
    ],
    description:
      "Rustic charm with a modern twist, nestled near the Ngorongoro Crater rim.",
    category: ["Hot Water", "Fireplace", "Balcony", "Hiking Trails"],
    price: 90,
    reviews: [
      {
        name: "Fatma K.",
        rating: 5,
        comment: "A cozy hideout close to nature. Very relaxing stay!",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Michael S.",
        rating: 4,
        comment: "Loved the fireplace and the views. Great host!",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
  },
];
