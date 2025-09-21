"use client";

import Image from "next/image";

interface Moment {
  id: number;
  name: string;
  location: string;
  feedback: string;
  image: string;
}

const moments: Moment[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Delhi",
    feedback:
      "Visiting Gaya for Pind Daan was one of the most spiritual journeys of my life. From the holy Vishnupad Temple to the serene Falgu River, every ritual was performed with devotion and authenticity. The arrangements made everything seamless, from guiding us through the ceremonies to ensuring food and stay were comfortable. Beyond rituals, I explored Bodh Gaya and experienced the peace of the Bodhi Tree. This trip gave me not only fulfillment but also deep cultural connection.",
    image: "/images/m1.jpeg",
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Mumbai",
    feedback:
      "My experience in Gaya was truly unforgettable. I had always heard about the sacred rituals, but being there in person was very different. The pandits performed every step with care and explained the significance beautifully. Apart from the rituals, I visited Sita Kund and the Barabar Caves, which made me appreciate the heritage even more. The local food, especially litti chokha and temple prasad, added warmth to the journey. I returned home with spiritual peace and cultural pride.",
    image: "/images/m2.jpeg",
  },
  {
    id: 3,
    name: "Suresh Patel",
    location: "Ahmedabad",
    feedback:
      "Traveling to Gaya for ancestral rituals was both emotional and enlightening. The pandits were knowledgeable and made sure everything was done according to tradition. What made the trip even better was exploring Bodh Gaya — the Bodhi Tree, monasteries, and peaceful surroundings left a lasting impression. I also enjoyed interacting with local artisans and buying handmade crafts as keepsakes. The entire experience combined devotion, culture, and exploration in a way I had never imagined before.",
    image: "/images/m3.jpeg",
  },
  {
    id: 4,
    name: "Anita Sharma",
    location: "Mumbai",
    feedback:
      "My experience in Gaya was truly unforgettable. I had always heard about the sacred rituals, but being there in person was very different. The pandits performed every step with care and explained the significance beautifully. Apart from the rituals, I visited Sita Kund and the Barabar Caves, which made me appreciate the heritage even more. The local food, especially litti chokha and temple prasad, added warmth to the journey. I returned home with spiritual peace and cultural pride.",
    image: "/images/m4.jpeg",
  },
  {
    id: 5,
    name: "Suresh Patel",
    location: "Ahmedabad",
    feedback:
      "Traveling to Gaya for ancestral rituals was both emotional and enlightening. The pandits were knowledgeable and made sure everything was done according to tradition. What made the trip even better was exploring Bodh Gaya — the Bodhi Tree, monasteries, and peaceful surroundings left a lasting impression. I also enjoyed interacting with local artisans and buying handmade crafts as keepsakes. The entire experience combined devotion, culture, and exploration in a way I had never imagined before.",
    image: "/images/m5.jpeg",
  },
  {
    id: 6,
    name: "Meera Joshi",
    location: "Pune",
    feedback:
      "Gaya offered me a perfect blend of spirituality and heritage. The rituals were performed with great sincerity, and the pandits explained each step so that I could connect deeply with the tradition. After the ceremonies, I explored Bodh Gaya, the monasteries, and the peaceful Falgu River. Meeting local vendors and trying traditional sweets like tilkut was a delightful experience. This trip not only fulfilled my religious duties but also gave me lasting memories of culture and devotion.",
    image: "/images/m6.jpeg",
  },
];

export default function MomentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-red-800 mb-10">
        Moments & Experiences
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={moment.image}
                alt={moment.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {moment.name}
                </h2>
                <p className="text-sm text-gray-500">{moment.location}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{moment.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
