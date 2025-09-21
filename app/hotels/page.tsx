"use client";

import Image from "next/image";
import Link from "next/link";


interface Hotel {
  id: number;
  name: string;
  address: string;
  mobile_no: string;
  email: string;
  price_range: string;
  image_url: string;
  rating: number;
  reviews: string;
  facilities: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Heritage Inn Gaya",
    address: "Bodh Gaya Road, Gaya, Bihar",
    mobile_no: "9123456780",
    email: "heritageinn.gaya@example.com",
    price_range: "₹3000-₹5000",
    image_url: "/images/h1.png", // ✅ single image

      
    rating: 4.7,
    reviews: "Close to Mahabodhi Temple, great hospitality.",
    facilities: "Free Wi-Fi, 24x7 Room Service, Airport Pickup, Cultural Programs, Spa & Wellness",
  },
  {
    id: 2,
    name: "Bodhgaya Regency Hotel",
    address: "Near Mahabodhi Temple, Bodh Gaya, Bihar",
    mobile_no: "9876543001",
    email: "bodhgaya.regency@example.com",
    price_range: "₹2800-₹4500",
    image_url: "/images/h2.png",
    rating: 4.6,
    reviews: "Comfortable rooms with excellent temple view.",
    facilities: "Complimentary Breakfast, Meditation Hall, Free Wi-Fi, Parking",
  },
  {
    id: 3,
    name: "Lotus Nikko Hotel",
    address: "Mahabodhi Temple Road, Gaya, Bihar",
    mobile_no: "9876543002",
    email: "lotus.nikko@example.com",
    price_range: "₹3500-₹5500",
    image_url: "/images/h3.png", // ✅ single image

    rating: 4.5,
    reviews: "Luxurious hotel with great dining facilities.",
    facilities: "Spa, Cultural Programs, Airport Pickup, Free Wi-Fi",
  },
  {
    id: 4,
    name: "Sujata Hotel",
    address: "Sujata Bypass, Bodh Gaya, Bihar",
    mobile_no: "9876543003",
    email: "sujata.hotel@example.com",
    price_range: "₹2500-₹4000",
    image_url: "/images/h4.png", 
    rating: 4.3,
    reviews: "Spacious rooms, near to main market.",
    facilities: "Free Wi-Fi, Restaurant, Parking, Tour Guide Services",
  },
  {
  id: 5,
  name: "Hotel Tokyo Vihar",
  address: "Japanese Temple Road, Bodh Gaya, Bihar",
  mobile_no: "9876543004",
  email: "tokyovihar@example.com",
  price_range: "₹2000-₹3800",
  image_url: "/images/h5.png", 
  rating: 4.2,
  reviews: "Japanese-style hospitality with calm environment.",
  facilities: "Japanese Cuisine, Meditation Hall, Free Wi-Fi, Parking",
},
{
  id: 6,
  name: "Royal Residency Gaya",
  address: "Near Thai Monastery, Bodh Gaya, Bihar",
  mobile_no: "9876543005",
  email: "royalresidency@example.com",
  price_range: "₹4000-₹6000",
  image_url: "/images/h6.png", 
  rating: 4.8,
  reviews: "Premium stay with luxury amenities.",
  facilities: "Spa, Fitness Center, Airport Pickup, Swimming Pool",
},
{
  id: 7,
  name: "Hotel Siddhartha International",
  address: "Station Road, Gaya, Bihar",
  mobile_no: "9876543006",
  email: "siddharthaintl@example.com",
  price_range: "₹1800-₹3200",
  image_url: "/images/h7.png", 
  rating: 4.0,
  reviews: "Budget-friendly option with decent facilities.",
  facilities: "Restaurant, Parking, Free Wi-Fi",
},
{
  id: 8,
  name: "Mahabodhi Resort",
  address: "Behind Mahabodhi Temple, Bodh Gaya, Bihar",
  mobile_no: "9876543007",
  email: "mahabodhi.resort@example.com",
  price_range: "₹3200-₹5200",
  image_url: "/images/h8.png", 
  rating: 4.6,
  reviews: "Peaceful resort with garden view.",
  facilities: "Spa, Yoga Center, Restaurant, Free Wi-Fi",
},
{
  id: 9,
  name: "Hotel Om International",
  address: "Magadh Colony, Gaya, Bihar",
  mobile_no: "9876543008",
  email: "om.intl@example.com",
  price_range: "₹2000-₹3500",
  image_url: "/images/h9.png", 
  rating: 4.1,
  reviews: "Good rooms at affordable rates.",
  facilities: "Free Wi-Fi, Parking, Restaurant, Room Service",
},
{
  id: 10,
  name: "The Imperial Hotel",
  address: "Station Road, Gaya, Bihar",
  mobile_no: "9876543009",
  email: "imperial.gaya@example.com",
  price_range: "₹2600-₹4200",
  image_url: "/images/h10.png", 
  rating: 4.3,
  reviews: "Classic hotel with traditional interiors.",
  facilities: "Restaurant, Free Wi-Fi, Parking, Conference Hall",
},
{
  id: 11,
  name: "Hotel Sakura House",
  address: "Near Japanese Temple, Bodh Gaya, Bihar",
  mobile_no: "9876543010",
  email: "sakura.house@example.com",
  price_range: "₹2400-₹3800",
  image_url: "/images/h11.png", 
  rating: 4.4,
  reviews: "Japanese-style rooms with calm environment.",
  facilities: "Japanese Cuisine, Free Wi-Fi, Garden View",
},
{
  id: 12,
  name: "Hotel Bodh Gaya Gautam",
  address: "Gaya Road, Bodh Gaya, Bihar",
  mobile_no: "9876543011",
  email: "gautam.hotel@example.com",
  price_range: "₹2800-₹4600",
  image_url: "/images/h12.png", 
  rating: 4.5,
  reviews: "Close to Mahabodhi Temple with luxury touch.",
  facilities: "Spa, Free Wi-Fi, Meditation Hall, Parking",
},
{
  id: 13,
  name: "Hotel Niranjana",
  address: "Bodh Gaya Road, Bihar",
  mobile_no: "9876543012",
  email: "niranjana.hotel@example.com",
  price_range: "₹2200-₹3700",
  image_url: "/images/h13.png", 
  rating: 4.2,
  reviews: "Friendly staff and good food.",
  facilities: "Restaurant, Free Wi-Fi, Room Service",
},
{
  id: 14,
  name: "Hotel Star Gaya",
  address: "Near Gaya Railway Station, Bihar",
  mobile_no: "9876543013",
  email: "stargaya@example.com",
  price_range: "₹1800-₹3000",
  image_url: "/images/h14.png", 
  rating: 3.9,
  reviews: "Best for quick travelers.",
  facilities: "Parking, Restaurant, Free Wi-Fi",
},
{
  id: 15,
  name: "Hotel Orchid Bodhgaya",
  address: "Temple Road, Gaya, Bihar",
  mobile_no: "9876543014",
  email: "orchid.bodhgaya@example.com",
  price_range: "₹2700-₹4200",
  image_url: "/images/h15.png", 
  rating: 4.4,
  reviews: "Modern facilities with peaceful vibe.",
  facilities: "Spa, Restaurant, Free Wi-Fi",
},
{
  id: 16,
  name: "Hotel Surya International",
  address: "Gaya Bus Stand, Bihar",
  mobile_no: "9876543015",
  email: "surya.intl@example.com",
  price_range: "₹1900-₹3100",
  image_url: "/images/h16.png", 
  rating: 4.0,
  reviews: "Affordable and centrally located.",
  facilities: "Restaurant, Free Wi-Fi, Parking",
},
{
  id: 17,
  name: "Hotel Galaxy Bodhgaya",
  address: "Behind Thai Temple, Bodh Gaya, Bihar",
  mobile_no: "9876543016",
  email: "galaxy.bodhgaya@example.com",
  price_range: "₹2800-₹4500",
  image_url: "/images/h17.png", 
  rating: 4.5,
  reviews: "Luxury boutique hotel with great reviews.",
  facilities: "Spa, Yoga Center, Free Wi-Fi",
},
{
  id: 18,
  name: "Hotel Lucky Gaya",
  address: "Station Road, Gaya, Bihar",
  mobile_no: "9876543017",
  email: "lucky.gaya@example.com",
  price_range: "₹1500-₹2500",
  image_url: "/images/h18.png", 
  rating: 3.8,
  reviews: "Budget stay option.",
  facilities: "Free Wi-Fi, Parking, Room Service",
},
{
  id: 19,
  name: "Hotel Prince International",
  address: "Gaya College Road, Bihar",
  mobile_no: "9876543018",
  email: "prince.intl@example.com",
  price_range: "₹2100-₹3300",
  image_url: "/images/h19.png", 
  rating: 4.1,
  reviews: "Decent stay with basic facilities.",
  facilities: "Restaurant, Free Wi-Fi, Parking",
},
{
  id: 20,
  name: "Hotel Ananda Palace",
  address: "Near Mahabodhi Temple, Bodh Gaya, Bihar",
  mobile_no: "9876543019",
  email: "ananda.palace@example.com",
  price_range: "₹2500-₹4000",
  image_url: "/images/h20.png", 
  rating: 4.3,
  reviews: "Great hospitality near temple area.",
  facilities: "Free Wi-Fi, Parking, Meditation Hall",
},
{
  id: 21,
  name: "Hotel Maya Heritage",
  address: "Near Thai Monastery, Gaya, Bihar",
  mobile_no: "9876543020",
  email: "maya.heritage@example.com",
  price_range: "₹3000-₹4800",
  image_url: "/images/h21.png", 
  rating: 4.6,
  reviews: "Beautiful interiors with modern touch.",
  facilities: "Spa, Free Wi-Fi, Tour Guide Services",
},
{
  id: 22,
  name: "Hotel Sangam International",
  address: "Sangam Road, Gaya, Bihar",
  mobile_no: "9876543021",
  email: "sangam.intl@example.com",
  price_range: "₹2200-₹3600",
  image_url: "/images/h22.png", 
  rating: 4.2,
  reviews: "Value for money.",
  facilities: "Restaurant, Free Wi-Fi, Parking",
},
{
  id: 23,
  name: "Hotel Tara Residency",
  address: "Temple Road, Gaya, Bihar",
  mobile_no: "9876543022",
  email: "tara.residency@example.com",
  price_range: "₹2400-₹3800",
  image_url: "/images/h23.png", 
  rating: 4.3,
  reviews: "Clean and well-maintained.",
  facilities: "Free Wi-Fi, Parking, Complimentary Breakfast",
},
{
  id: 24,
  name: "Hotel Grand Palace",
  address: "Station Road, Gaya, Bihar",
  mobile_no: "9876543023",
  email: "grand.palace@example.com",
  price_range: "₹3200-₹5200",
  image_url: "/images/h24.png", 
  rating: 4.6,
  reviews: "Luxurious stay in central Gaya.",
  facilities: "Spa, Restaurant, Free Wi-Fi, Parking",
},
{
  id: 25,
  name: "Hotel Crystal Inn",
  address: "Magadh Colony, Gaya, Bihar",
  mobile_no: "9876543024",
  email: "crystal.inn@example.com",
  price_range: "₹2000-₹3400",
  image_url: "/images/h25.png", 
  rating: 4.2,
  reviews: "Comfortable rooms and affordable pricing.",
  facilities: "Restaurant, Parking, Free Wi-Fi",
},
{
  id: 26,
  name: "Hotel Sunrise Bodhgaya",
  address: "Temple Area, Gaya, Bihar",
  mobile_no: "9876543025",
  email: "sunrise.bodhgaya@example.com",
  price_range: "₹2100-₹3500",
  image_url: "/images/h26.png", 
  rating: 4.3,
  reviews: "Warm hospitality and neat rooms.",
  facilities: "Free Wi-Fi, Meditation Hall, Parking",
},
{
  id: 27,
  name: "Hotel Paradise Gaya",
  address: "Station Road, Bihar",
  mobile_no: "9876543026",
  email: "paradise.gaya@example.com",
  price_range: "₹2500-₹4100",
  image_url: "/images/h27.png", 
  rating: 4.4,
  reviews: "Great food and cozy environment.",
  facilities: "Restaurant, Free Wi-Fi, Room Service",
},
{
  id: 28,
  name: "Hotel Mahamaya Palace",
  address: "Near Bodh Gaya Museum, Bihar",
  mobile_no: "9876543027",
  email: "mahamaya.palace@example.com",
  price_range: "₹2800-₹4600",
  image_url: "/images/h28.png", 
  rating: 4.5,
  reviews: "Modern amenities with peaceful surroundings.",
  facilities: "Spa, Free Wi-Fi, Parking, Yoga Center",
},
{
  id: 29,
  name: "Hotel Diamond Residency",
  address: "Gaya College Road, Bihar",
  mobile_no: "9876543028",
  email: "diamond.residency@example.com",
  price_range: "₹2300-₹3700",
  image_url: "/images/h29.png", 
  rating: 4.2,
  reviews: "Good service and affordable stay.",
  facilities: "Free Wi-Fi, Restaurant, Parking",
},
{
  id: 30,
  name: "Hotel Bodhi Tree",
  address: "Temple Lane, Bodh Gaya, Bihar",
  mobile_no: "9876543029",
  email: "bodhitree.hotel@example.com",
  price_range: "₹2700-₹4300",
  image_url: "/images/h30.png", 
  rating: 4.5,
  reviews: "Eco-friendly property with spiritual ambiance.",
  facilities: "Meditation Hall, Free Wi-Fi, Parking, Spa",
}


  // 👉 Add rest of hotels here (copy from your SQL dataset)
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-red-800 mb-10">
        Hotels in Gaya
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={hotel.image_url}
              alt={hotel.name}
              className="w-full h-56 object-cover"
              width={400}
              height={250}
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {hotel.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{hotel.address}</p>
              <p className="text-yellow-600 font-medium">
                ⭐ {hotel.rating} | {hotel.reviews}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Facilities:</strong> {hotel.facilities}
              </p>
              <p className="text-red-700 font-bold mt-3">
                {hotel.price_range}
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  📞 {hotel.mobile_no}
                </p>
                <p className="text-sm text-gray-600">
                  📧 {hotel.email}
                </p>
              </div>

              {/* ✅ Book Now Button with redirect */}
              <div className="mt-6">
                <Link
                 href="/book"
                 className="block w-full bg-red-700 text-white text-center py-2 px-4 rounded-lg hover:bg-red-800 transition"
                >
                 Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}