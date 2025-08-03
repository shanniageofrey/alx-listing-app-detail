
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <div className="text-gray-600 mt-1 flex flex-wrap gap-2">
          <span>{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img src={property.image} className="col-span-2 h-96 object-cover rounded-md w-full" />
          {property.images?.slice(0, 2).map((img, i) => (
            <img key={i} src={img} className="h-40 w-full object-cover rounded-md" />
          ))}
        </div>

        {/* Description with Tabs */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <div className="bg-gray-100 p-4 rounded-md">{property.description}</div>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, idx) => (
              <li key={idx} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      <div className="sticky top-6 h-fit">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
