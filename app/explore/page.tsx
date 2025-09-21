"use client";
import { useState } from "react";

const exploreData = [
  // Food Spots
{
    id: 1,
    name: "Paprika Fine Dine (Pure Veg)",
        images: ["/images/exp1.png"],
    location: "Gaya (Dulhingunj, near Kiran Cinema)",
    specialty: "Vegetarian multi-cuisine",
    about:
      "Offers North & South Indian dishes along with Chinese and dessert items in a clean fine-dining setup.",
    highlights: ["North & South Indian", "Chinese", "Desserts"],
    languages: ["Hindi", "English"],
    reviews: ["Ideal for family dining and vegetarian lovers."],
  },
  
  {
    id: 2,
    name: "Gopal Sweets",
        images: ["/images/exp2.png"],
    location: "Near Central Gaya",
    specialty: "Traditional sweets and snacks",
    about:
      "Gopal Sweets is famous for regional sweets and snacks that complement local meals.",
    highlights: ["Tilkut", "Khaja", "Thekua"],
    languages: ["Hindi", "English"],
    reviews: ["Delicious sweets with authentic taste."],
  },
  {
    id: 3,
    name: "Hari Om International Café",
        images: ["/images/exp3.png"],
    location: "Bodh Gaya, Bihar",
    specialty: "Vegetarian food and snacks",
    about:
      "Hari Om Café serves fresh vegetarian dishes, tea, and light snacks near temples.",
    highlights: ["Vegetarian", "Snacks", "Tea & Coffee"],
    languages: ["Hindi", "English"],
    reviews: ["Cozy café with good vegetarian options."],
  },
  {
    id: 4,
    name: "Coffee Roster",
        images: ["/images/exp4.png"],
    location: "Bodh Gaya, Bihar",
    specialty: "Café with coffee and light meals",
    about:
      "Coffee Roster is a popular café offering quality coffee, bakery items, and snacks in a relaxed atmosphere.",
    highlights: ["Coffee", "Bakery", "Light Meals"],
    languages: ["Hindi", "English"],
    reviews: ["Perfect spot for tourists and coffee lovers."],
  },
  {
    id: 5,
    name: "Basant Mishthan Bhandar",
        images: ["/images/exp5.png"],
    location: "Gaya, Bihar",
    specialty: "Traditional sweets",
    about:
      "Famous for Khaja, Tilkut, and other regional sweets, Sawan Mistan Bhandar is a must-visit for dessert lovers.",
    highlights: ["Khaja", "Tilkut", "Kesaria Peda"],
    languages: ["Hindi", "English"],
    reviews: ["Sweet treats with authentic flavors."],
  },
  {
    id: 6,
    name: "Ma Mangla Dhaba",
        images: ["/images/exp6.png"],
    location: "Gaya, Bihar",
    specialty: "Vegetarian local cuisine",
    about:
      "Ma Mangla Dhaba offers simple vegetarian dishes, roti, dal, and local curries at affordable prices.",
    highlights: ["Vegetarian Curries", "Roti", "Dal"],
    languages: ["Hindi", "English"],
    reviews: ["Authentic local dhaba experience."],
  },
  
  {
    id: 7,
    name: "Krishna Chaat Bhandar",
        images: ["/images/exp7.png"],
    location: "Gaya, Bihar",
    specialty: "Street food and sweets",
    about:
      "Around Chatta Masjid, street vendors sell local snacks and traditional sweets.",
    highlights: ["Bakarkhani", "Sheermal", "Khaja & Thekua"],
    languages: ["Hindi", "English"],
    reviews: ["Great for street-style local treats."],
  },
  {
    id: 8,
    name: "Shri Raam Tilkut Bhandar",
        images: ["/images/exp8.png"],
    location: "Gaya, Bihar",
    specialty: "Traditional sweets and local snacks",
    about:
      "Classic mithai shops and snack corners for traditional treats like Khaja, Thekua, and Anarsa.",
    highlights: ["Khaja", "Thekua", "Local Chaat"],
    languages: ["Hindi", "English"],
    reviews: ["Best spot for traditional snacks and sweets."],
  },
  {
  id: 9,
  name: "Vandana Sweets",
      images: ["/images/exp9.png"],
  location: "Gaya, Bihar",
  specialty: "Authentic Indian sweets and snacks",
  about:
    "A popular spot for mithai lovers offering freshly prepared sweets with authentic taste and quality.",
  highlights: ["Rasgulla", "Gulab Jamun", "Samosa"],
  languages: ["Hindi", "English"],
  reviews: ["Famous for freshness and traditional flavors."],
},

{
  id: 10,
  name: "Prahalad Sweets and Namkeen",
      images: ["/images/exp10.png"],
  location: "Gaya, Bihar",
  specialty: "Wide range of sweets and savory namkeen",
  about:
    "Known for its diverse collection of sweets and crispy namkeen, loved by locals and tourists alike.",
  highlights: ["Kaju Katli", "Besan Ladoo", "Mixture Namkeen"],
  languages: ["Hindi", "English"],
  reviews: ["Best place for both sweet and spicy cravings."],
},

{
  id: 11,
  name: "Carrot Cake and Coffee",
      images: ["/images/exp11.png"],
  location: "Gaya, Bihar",
  specialty: "Freshly baked cakes and handcrafted coffee",
  about:
    "A cozy bakery-café known for its signature carrot cake and aromatic coffee brews.",
  highlights: ["Carrot Cake", "Cappuccino", "Brownies"],
  languages: ["Hindi", "English"],
  reviews: ["Perfect blend of desserts and coffee in one spot."],
},

{
  id: 12,
  name: "Be Happy Café",
      images: ["/images/exp12.png"],
  location: "Gaya, Bihar",
  specialty: "Continental and fusion foods",
  about:
    "A youth-favorite café offering continental dishes, snacks, and refreshing drinks with a vibrant vibe.",
  highlights: ["Pasta", "Pizza", "Cold Coffee"],
  languages: ["Hindi", "English"],
  reviews: ["Chill ambience and delicious food."],
},

{
  id: 13,
  name: "Sudd Café",
      images: ["/images/exp13.png"],
  location: "Gaya, Bihar",
  specialty: "Organic and healthy food options",
  about:
    "A café that focuses on clean, healthy, and organic meals with a simple yet modern touch.",
  highlights: ["Smoothie Bowls", "Herbal Tea", "Vegan Dishes"],
  languages: ["Hindi", "English"],
  reviews: ["Best place for health-conscious foodies."],
},

{
  id: 14,
  name: "Rose Apple Cafe",
      images: ["/images/exp14.png"],
  location: "Gaya, Bihar",
  specialty: "Fast food and beverages",
  about:
    "A popular hangout spot serving quick bites, tea, and coffee with a friendly and welcoming atmosphere.",
  highlights: ["Sandwiches", "Momos", "Tea"],
  languages: ["Hindi", "English"],
  reviews: ["Great place for casual meetups and tasty snacks."],
},

  {
    id: 15,
    name: "Ram Rasoi (Bhojanalaya)",
        images: ["/images/exp15.png"],
    location: "Gaya, Bihar",
    specialty: "Bihari home-style food",
    about:
      "Ram Rasoi is a traditional Bhojanalaya serving authentic Bihari cuisine with a homely touch.",
    highlights: ["Litti-Chokha", "Sattu Paratha", "Local Veg Curries"],
    languages: ["Hindi", "English"],
    reviews: ["Great place to taste authentic Bihari flavors."],
  },
  {
    id: 16,
    name: "The Spice Affair",
        images: ["/images/exp16.png"],
    location: "Gaya, Gandhi Maidan Road, Dulhingunj",
    specialty: "Multi-cuisine with North, South, Chinese, Mughlai",
    about:
      "Upscale restaurant popular for non-local tastes and group dinners in Gaya.",
    highlights: ["Multi-cuisine", "Group Dining", "Upscale Ambience"],
    languages: ["Hindi", "English"],
    reviews: ["Good ambiance with varied food options."],
  },

  {
    id: 17,
    name: "Dobhi Road Market",
        images: ["/images/exp17.png"],
    location: "Dobhi Road, Gaya, Bihar",
    specialty: "Handicrafts, religious items, souvenirs",
    about:
      "Dobhi Road Market is known for local handicrafts, small Buddha statues, prayer beads, and souvenirs. A good place to shop for gifts and spiritual items.",
    highlights: ["Handicrafts", "Souvenirs", "Religious Items"],
    tips: ["Bargain politely; 10–20% discount possible on multiple items."],
    languages: ["Hindi", "English"],
    reviews: ["Great market for local crafts and spiritual keepsakes."],
  },
  {
    id: 18,
    name: "Tower Chowk / Gaya Main Market",
        images: ["/images/exp18.png"],
    location: "Tower Chowk, Gaya Town, Bihar",
    specialty: "Traditional clothing, jewelry, local snacks, brassware",
    about:
      "Main Market at Tower Chowk is bustling with traditional clothing, jewelry, local snacks, and everyday goods. It’s a hub for both locals and tourists.",
    highlights: ["Traditional Clothing", "Jewelry", "Local Snacks", "Brassware"],
    tips: ["Crowded; keep an eye on belongings. Always ask for the price before picking items."],
    languages: ["Hindi", "English"],
    reviews: ["Authentic local shopping experience with a variety of goods."],
  },

  {
    id: 19,
    name: "Manpur Bazaar",
        images: ["/images/exp19.png"],
    location: "Manpur, Gaya, Bihar",
    specialty: "Handloom textiles, sarees, traditional fabrics",
    about:
      "Manpur Bazaar is ideal for handloom textiles, sarees, traditional fabrics, and cultural souvenirs. Perfect for ethnic gifts and local shopping.",
    highlights: ["Handloom Textiles", "Sarees", "Traditional Fabrics", "Cultural Souvenirs"],
    tips: ["Bargaining expected, especially for bulk purchases."],
    languages: ["Hindi", "English"],
    reviews: ["Great for authentic fabrics and ethnic gifts."],
  },
  {
    id: 20,
    name: "Tibetan Refugee Market",
        images: ["/images/exp20.png"],
    location: "Bodh Gaya, Bihar",
    specialty: "Tibetan handicrafts, jewelry, carpets, Thangka paintings",
    about:
      "The Tibetan Refugee Market is famous for handicrafts, jewelry, carpets, prayer flags, and small Buddha statues. Visitors can explore various stalls for authentic Tibetan items.",
    highlights: ["Tibetan Handicrafts", "Jewelry", "Prayer Flags", "Buddha Statues"],
    tips: ["Some discounts possible if buying multiple items. Take time to explore stalls."],
    languages: ["Hindi", "English", "Tibetan"],
    reviews: ["Best place for Tibetan souvenirs and handcrafted items."],
  },
  {
    id: 21,
    name: "Mahabodhi Temple Complex Stalls",
        images: ["/images/exp21.png"],
    location: "Mahabodhi Temple Complex, Bodh Gaya",
    specialty: "Religious souvenirs, incense sticks, prayer flags",
    about:
      "Official stalls at Mahabodhi Temple sell religious items, incense sticks, prayer flags, and spiritual keepsakes for devotees and tourists.",
    highlights: ["Religious Souvenirs", "Incense", "Prayer Flags", "Buddha Statues"],
    tips: ["Prices usually fixed; buy from official stalls to ensure authenticity."],
    languages: ["Hindi", "English"],
    reviews: ["Good place for spiritual keepsakes and souvenirs."],
  }
];


export default function Explore() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Explore Gaya: Markets & Food Spots</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exploreData.map((place) => (
          <div
            key={place.id}
            className="border rounded-xl shadow-md hover:shadow-lg transition p-4 bg-white cursor-pointer"
            onClick={() => setSelected(place)}
          >
            <img
              src={place.images[0]}
              alt={place.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{place.name}</h2>
            <p className="text-sm text-gray-600">{place.location}</p>
            <p className="text-gray-700 mt-2">{place.specialty}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-2 right-2 text-red-500 text-xl"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
            <img
              src={selected.images[0]}
              alt={selected.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selected.name}</h2>
            <p className="text-gray-600">{selected.location}</p>
            <p className="mt-3">{selected.about}</p>
            <h3 className="mt-3 font-semibold">Highlights:</h3>
            <ul className="list-disc pl-6">
              {selected.highlights.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <h3 className="mt-3 font-semibold">Languages Spoken:</h3>
            <p>{selected.languages.join(", ")}</p>
            <h3 className="mt-3 font-semibold">Reviews:</h3>
            <p className="italic">"{selected.reviews[0]}"</p>
          </div>
        </div>
      )}
    </div>
  );
}