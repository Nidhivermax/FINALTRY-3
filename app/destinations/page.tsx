"use client";

import { useState } from "react";

interface Tour {
  id: number;
  name: string;
  images: string[];
  location: string;
  rating: number;
  specialty: string;
  about: string;
  facilities: string[];
  languages: string[];
  reviews: string[];
}


  const tours: Tour[] = [
  {
    id: 1,
    name: "Mahabodhi Temple",
        images: ["/images/dest1.png"],   

    location: "Bodh Gaya",
    rating: 4.8,
    specialty: "Visit the UNESCO World Heritage Mahabodhi Temple.",
    about:
      "This tour covers the sacred Mahabodhi Temple in Bodh Gaya, where Lord Buddha attained enlightenment.",
    facilities: ["Guided Tour", "Photography", "Spiritual Session"],
    languages: ["Hindi", "English"],
    reviews: ["A must-visit UNESCO World Heritage site."],
  },
  {
    id: 2,
    name: "Great Buddha Statue",
        images: ["/images/dest2.png"],   

    location: "Bodh Gaya",
    rating: 4.7,
    specialty: "See the iconic 80-ft tall Great Buddha statue.",
    about:
      "A serene spot featuring the 80-foot tall Great Buddha statue surrounded by smaller sculptures.",
    facilities: ["Photography", "Guided Tours", "Benches"],
    languages: ["Hindi", "English"],
    reviews: ["Iconic and peaceful place in Bodh Gaya."],
  },
  {
    id: 3,
    name: "Thai Monastery ",
        images: ["/images/dest3.png"],  

    location: "Bodh Gaya",
    rating: 4.6,
    specialty: "Explore Thai-style Buddhist monastery and gardens.",
    about:
      "The Thai Monastery is beautifully designed in Thai architecture and surrounded by gardens.",
    facilities: ["Meditation Hall", "Guided Tours", "Photography"],
    languages: ["Thai", "Hindi", "English"],
    reviews: ["Very peaceful monastery with Thai-style design."],
  },
  {
    id: 4,
    name: "Japanese Temple",
        images: ["/images/dest4.png"],   

    location: "Bodh Gaya",
    rating: 4.5,
    specialty: "Experience Japanese-style Buddhist temple and meditation.",
    about:
      "The Japanese Temple in Bodh Gaya offers a peaceful environment with traditional Japanese Buddhist architecture.",
    facilities: ["Meditation Hall", "Photography", "Guided Tours"],
    languages: ["Japanese", "Hindi", "English"],
    reviews: ["Very peaceful and serene place for meditation."],
  },
  {
    id: 5,
    name: "Royal Bhutan Monastery ",
        images: ["/images/dest5.png"],   

    location: "Bodh Gaya",
    rating: 4.6,
    specialty: "Bhutanese-style monastery with intricate architecture.",
    about:
      "Built by the King of Bhutan, this monastery showcases Bhutanese Buddhist culture and architecture.",
    facilities: ["Guided Tours", "Cultural Experience", "Photography"],
    languages: ["Dzongkha", "Hindi", "English"],
    reviews: ["Rich Bhutanese architecture and culture."],
  },
  {
    id: 6,
    name: "Vietnamese Temple",
       images: ["/images/dest6.png"],   

    location: "Bodh Gaya",
    rating: 4.4,
    specialty: "Explore Vietnamese Buddhist art and temples.",
    about:
      "The Vietnamese Temple in Bodh Gaya features large Buddha statues and Vietnamese-style gardens.",
    facilities: ["Guided Tours", "Photography", "Meditation"],
    languages: ["Vietnamese", "Hindi", "English"],
    reviews: ["Unique Vietnamese Buddhist temple experience."],
  },
  {
    id: 7,
    name: "Indosan Nippon Japanese Temple",
        images: ["/images/dest7.png"],   

    location: "Bodh Gaya",
    rating: 4.5,
    specialty: "Japanese Buddhist temple with cultural designs.",
    about:
      "Indosan Nippon Temple is built in Japanese style and promotes Buddhist teachings.",
    facilities: ["Meditation", "Cultural Tours", "Photography"],
    languages: ["Japanese", "Hindi", "English"],
    reviews: ["Beautiful temple with Japanese architecture."],
  },
  {
    id: 8,
    name: "Chinese Temple ",
       images: ["/images/dest8.png"],   

    location: "Bodh Gaya",
    rating: 4.3,
    specialty: "Explore Chinese Buddhist temple and teachings.",
    about:
      "The Chinese Temple has Chinese-style architecture and several Buddhist statues.",
    facilities: ["Guided Tours", "Photography", "Meditation Hall"],
    languages: ["Chinese", "Hindi", "English"],
    reviews: ["Chinese-style temple, peaceful environment."],
  },
  {
    id: 9,
    name: "Tibetan Monastery ",
        images: ["/images/dest9.png"],   

    location: "Bodh Gaya",
    rating: 4.7,
    specialty: "Experience Tibetan culture and Buddhist traditions.",
    about:
      "The Tibetan Monastery features prayer wheels, Tibetan architecture, and cultural practices.",
    facilities: ["Prayer Wheels", "Guided Tours", "Photography"],
    languages: ["Tibetan", "Hindi", "English"],
    reviews: ["Tibetan culture preserved beautifully."],
  },
  {
    id: 10,
    name: "Metta Buddharam Temple",
        images: ["/images/dest10.png"], 
    location: "Bodh Gaya",
    rating: 4.2,
    specialty: "Explore Buddhist meditation and calm atmosphere.",
    about:
      "Metta Buddharam Temple offers a place for deep meditation and peace.",
    facilities: ["Meditation", "Peaceful Atmosphere", "Photography"],
    languages: ["Hindi", "English"],
    reviews: ["Perfect place for meditation."],
  },
  {
    id: 11,
    name: "Root Institute ",
        images: ["/images/dest11.png"],
    location: "Bodh Gaya",
    rating: 4.6,
    specialty: "Spiritual learning and Buddhist studies center.",
    about:
      "Root Institute offers courses on Buddhist philosophy and meditation retreats.",
    facilities: ["Courses", "Retreats", "Meditation"],
    languages: ["Hindi", "English"],
    reviews: ["Great place for spiritual learning."],
  },
  {
    id: 12,
    name: "Muchalinda Lake ",
        images: ["/images/dest12.png"],
    location: "Bodh Gaya",
    rating: 4.4,
    specialty: "Sacred lake associated with Lord Buddha.",
    about:
      "Muchalinda Lake is named after the snake king who protected Buddha during meditation.",
    facilities: ["Photography", "Peaceful Environment", "Guided Tours"],
    languages: ["Hindi", "English"],
    reviews: ["Peaceful and sacred site."],
  },
  
  {
    id: 13,
    name: "Daijokyo Buddhist Temple",
        images: ["/images/dest13.png"],
    location: "Bodh Gaya",
    rating: 4.3,
    specialty: "Japanese Buddhist temple with cultural influence.",
    about:
      "Daijokyo Temple is a Japanese Buddhist temple with large prayer halls.",
    facilities: ["Guided Tours", "Meditation", "Photography"],
    languages: ["Japanese", "Hindi", "English"],
    reviews: ["Peaceful temple with Japanese design."],
  },
  {
    id: 14,
    name: "Sujata Stupa",
        images: ["/images/dest14.png"],
    location: "Bodh Gaya",
    rating: 4.4,
    specialty: "Stupa dedicated to Sujata, who fed Lord Buddha.",
    about:
      "Sujata Stupa is an ancient monument marking the spot where Sujata offered food to Buddha.",
    facilities: ["Guided Tours", "Photography", "Heritage Site"],
    languages: ["Hindi", "English"],
    reviews: ["Historic place related to Buddha’s journey."],
  },
  {
    id: 15,
    name: "Dungeshwari Cave Temples",
        images: ["/images/dest15.png"],
    location: "Bodh Gaya",
    rating: 4.5,
    specialty: "Caves where Buddha meditated before enlightenment.",
    about:
      "Dungeshwari Caves, also known as Mahakala Caves, are sacred meditation sites of Buddha.",
    facilities: ["Guided Tours", "Photography", "Meditation"],
    languages: ["Hindi", "English"],
    reviews: ["Spiritual and historic caves worth visiting."],
  },
  {
    id: 16,
    name: "Barabar Caves ",
        images: ["/images/dest16.png"],
    location: "Jehanabad (near Gaya)",
    rating: 4.6,
    specialty: "Oldest rock-cut caves in India.",
    about:
      "Barabar Caves are ancient rock-cut caves from Mauryan period, linked to Buddhism and Jainism.",
    facilities: ["Guided Tours", "Archaeological Site", "Photography"],
    languages: ["Hindi", "English"],
    reviews: ["Historic caves with amazing carvings."],
  },
  {
    id: 17,
    name: "Vishnupad Temple ",
        images: ["/images/dest17.png"],
    location: "Gaya",
    rating: 4.7,
    specialty: "Famous Hindu temple with Vishnu’s footprint.",
    about:
      "Vishnupad Temple is dedicated to Lord Vishnu and is a major pilgrimage site in Gaya.",
    facilities: ["Guided Tours", "Photography", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Very spiritual place for Hindus."],
  },

  {
    id: 18,
    name: "Pretshila Hills ",
       images: ["/images/dest18.png"],
    location: "Gaya",
    rating: 4.2,
    specialty: "Hill known for pind daan rituals.",
    about:
      "Pretshila Hill is a sacred place where pind daan rituals are performed for ancestors.",
    facilities: ["Guided Tours", "Photography", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Important religious site for rituals."],
  },
  {
    id: 19,
    name: "Phalgu River ",
        images: ["/images/dest19.png"],
    location: "Gaya",
    rating: 4.0,
    specialty: "Sacred river in Gaya for rituals.",
    about:
      "Phalgu River is considered holy and is associated with Hindu rituals and traditions.",
    facilities: ["Photography", "Guided Tours", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Sacred river for religious practices."],
  },
  {
    id: 20,
    name: "Mangla Gauri Temple",
        images: ["/images/dest20.png"],
    location: "Gaya",
    rating: 4.5,
    specialty: "Shakti Peeth temple dedicated to Goddess Durga.",
    about:
      "Mangla Gauri Temple is one of the 18 Maha Shakti Peethas dedicated to Goddess Shakti.",
    facilities: ["Photography", "Guided Tours", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Sacred temple for devotees of Goddess Durga."],
  },
  
  {
    id: 21,
    name: "Ramshila Hill ",
        images: ["/images/dest21.png"],
    location: "Gaya",
    rating: 4.3,
    specialty: "Hill with temple dedicated to Lord Rama.",
    about:
      "Ramshila Hill has a temple where Lord Rama is believed to have performed pind daan.",
    facilities: ["Guided Tours", "Photography", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Historic and spiritual location."],
  },
  {
    id: 22,
    name: "Brahmayoni Hill ",
        images: ["/images/dest22.png"],
    location: "Gaya",
    rating: 4.4,
    specialty: "Hilltop temple with panoramic views.",
    about:
      "Brahmayoni Hill is known for its temples and offers a panoramic view of Gaya city.",
    facilities: ["Guided Tours", "Photography", "Trekking"],
    languages: ["Hindi", "English"],
    reviews: ["Great views from the top and religious significance."],
  },
  {
    id: 23,
    name: "Sita Kund ",
        images: ["/images/dest23.png"],
    location: "Gaya",
    rating: 4.2,
    specialty: "Sacred pond linked to Goddess Sita.",
    about:
      "Sita Kund is a sacred water tank believed to be associated with Goddess Sita.",
    facilities: ["Photography", "Guided Tours", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Peaceful and sacred water site."],
  },
  {
    id: 24,
    name: "Akshayavat Tree ",
        images: ["/images/dest24.png"],
    location: "Gaya",
    rating: 4.1,
    specialty: "Sacred immortal tree in Gaya.",
    about:
      "Akshayavat is a sacred fig tree worshipped for its spiritual and religious significance.",
    facilities: ["Photography", "Guided Tours", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Sacred tree with historic importance."],
  },
  {
    id: 25,
    name: "Koteshwarnath Temple ",
        images: ["/images/dest25.png"],
    location: "Gaya",
    rating: 4.3,
    specialty: "Ancient temple dedicated to Lord Shiva.",
    about:
      "Koteshwarnath Temple is a historic Shiva temple in Gaya with religious importance.",
    facilities: ["Photography", "Guided Tours", "Religious Rituals"],
    languages: ["Hindi", "English"],
    reviews: ["Beautiful and peaceful Shiva temple."],
  },
  {
    id: 26,
    name: "Thai Monastery Gardens",
        images: ["/images/dest26.png"],
    location: "Bodh Gaya",
    rating: 4.5,
    specialty: "Beautiful gardens around Thai monastery.",
    about:
      "The Thai Temple Garden in Bodh Gaya offers lush greenery and peaceful surroundings.",
    facilities: ["Photography", "Guided Tours", "Relaxation"],
    languages: ["Thai", "Hindi", "English"],
    reviews: ["Beautiful gardens and peaceful environment."],
  },
  {
    id: 27,
    name: "Dobhi Botanical Garden ",
        images: ["/images/dest27.png"],
    location: "Dobhi, Gaya",
    rating: 4.2,
    specialty: "Nature walks and plant conservation.",
    about:
      "A peaceful garden near Dobhi maintained for plant conservation and relaxation.",
    facilities: ["Photography", "Nature Walks", "Picnic Area"],
    languages: ["Hindi", "English"],
    reviews: ["Great place for nature lovers."],
  },
  {
    id: 28,
    name: "Bodhgaya Multimedia Museum ",
        images: ["/images/dest28.png"],
    location: "Bodh Gaya",
    rating: 4.4,
    specialty: "Interactive history of Lord Buddha.",
    about:
      "Uses modern technology, light & sound to showcase the life of Lord Buddha in an engaging way.",
    facilities: ["Interactive Exhibits", "Photography", "Guided Tours"],
    languages: ["Hindi", "English"],
    reviews: ["Engaging museum for students and tourists."],
  },
  {
    id: 29,
    name: "Science Centre",
        images: ["/images/dest29.png"],
    location: "Gaya",
    rating: 4.3,
    specialty: "Interactive science learning hub.",
    about:
      "Local science center with interactive exhibits, popular among school trips and young learners.",
    facilities: ["Interactive Exhibits", "Workshops", "Guided Tours"],
    languages: ["Hindi", "English"],
    reviews: ["Fun and educational for children."],
  },
  {
  id: 30,
  name: "Surya Kund",
      images: ["/images/dest30.png"],
  location: "Gaya",
  rating: 4.5,
  specialty: "Sacred pond dedicated to Sun God.",
  about:
    "Surya Kund in Gaya is a revered holy pond where devotees take a sacred dip before performing rituals like Pind Daan. It is believed that offering prayers here brings blessings of the Sun God and purifies the soul.",
  facilities: ["Holy Bathing Area", "Ritual Platforms", "Nearby Temples"],
  languages: ["Hindi", "English", "Sanskrit"],
  reviews: [
    "Peaceful spiritual place with divine vibes.",
    "A must-visit before performing rituals at Vishnupad Temple.",
  ],
}

  

];


export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Tours in Gaya</h1>
      <p className="text-gray-600 mb-8 max-w-2xl text-center">
        Explore guided tours and heritage experiences around Gaya Ji, Bodh Gaya
        and nearby places.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Tour Images */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              {tour.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={tour.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              ))}
            </div>

            {/* Basic Info */}
            <h2 className="text-xl font-semibold mb-1">{tour.name}</h2>
            <p className="text-gray-600">{tour.location}</p>
            <p className="text-yellow-600 font-medium">
              ⭐ {tour.rating} / 5
            </p>
            <p className="text-gray-600 italic">{tour.specialty}</p>

            {/* More Info Button */}
            <button
              className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
              onClick={() =>
                setSelectedTour(selectedTour === tour.id ? null : tour.id)
              }
            >
              {selectedTour === tour.id ? "Hide Details" : "View Details"}
            </button>

            {/* Expanded Details */}
            {selectedTour === tour.id && (
              <div className="mt-4 text-gray-700">
                <p>{tour.about}</p>
                <h4 className="mt-2 font-semibold">Facilities:</h4>
                <ul className="list-disc ml-6">
                  {tour.facilities.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <h4 className="mt-2 font-semibold">Languages:</h4>
                <p>{tour.languages.join(", ")}</p>
                <h4 className="mt-2 font-semibold">Reviews:</h4>
                <ul className="list-disc ml-6">
                  {tour.reviews.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}