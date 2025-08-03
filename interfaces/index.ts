

export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  images: string[];
  description: string;
  category: string[];
  price: number;
  reviews: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}
