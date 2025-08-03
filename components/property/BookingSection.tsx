import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  };

  const total = calculateNights() * price;

  return (
    <div className="bg-white border p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mt-4 font-medium">
        Total payment: ${total || price}
      </div>

      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
