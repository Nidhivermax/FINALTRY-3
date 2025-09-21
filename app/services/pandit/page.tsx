"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

type Pandit = {
  id: number;
  name: string;
  photo: string;
  experience: number;
  rating: number;
  specialty: string;
  languages: string[];
  about: string;
  reviews: string[];
};

const pandits: Pandit[] = [
  {
    id: 1,
    name: "Pandit Raghav Pandey",
    photo: "/images/pd1.jpeg",
    experience: 15,
    rating: 4.8,
    specialty: "Pind Daan & Pitru Paksha rituals",
    languages: ["Hindi", "Sanskrit", "English"],
    about:
      "Pandit Raghav Pandey has been guiding families in Pind Daan rituals for over 15 years with deep knowledge of scriptures.",
    reviews: [
      "Very experienced and patient. Explained every step clearly.",
      "Performed rituals with utmost devotion. Highly recommend!"
    ]
  },
  {
    id: 2,
    name: "Pandit Suresh Mishra",
    photo: "/images/pd2.jpeg",
    experience: 12,
    rating: 4.6,
    specialty: "Shraddha & Tarpan rituals",
    languages: ["Hindi", "Bhojpuri"],
    about:
      "Pandit Mishra is known for performing Shraddha with devotion and accuracy, ensuring peace for ancestors.",
    reviews: [
      "Very humble and knowledgeable.",
      "Guided us perfectly during Pitru Paksha."
    ]
  },
  {
    id: 3,
    name: "Pandit Anil Shastri",
    photo: "/images/pd3.jpeg",
    experience: 20,
    rating: 4.9,
    specialty: "Vedic Poojas and Homam",
    languages: ["Hindi", "Sanskrit"],
    about:
      "Pandit Shastri has been performing Vedic rituals for 20 years and is highly respected in Gaya Ji.",
    reviews: [
      "Amazing knowledge of Vedic scriptures.",
      "Very polite and respectful."
    ]
  },
  {
    id: 4,
    name: "Pandit Mohan Tripathi",
    photo: "/images/pd4.jpeg",
    experience: 10,
    rating: 4.5,
    specialty: "Falgu River rituals",
    languages: ["Hindi", "Maithili"],
    about:
      "Pandit Tripathi specializes in Falgu River rituals and helps devotees with the traditional practices of Pind Daan.",
    reviews: [
      "Very professional and punctual.",
      "Helped us understand the importance of every ritual."
    ]
  },
  {
    id: 5,
    name: "Pandit Ajay Sharma",
    photo: "/images/pd5.jpeg",
    experience: 8,
    rating: 4.3,
    specialty: "Astrological guidance with Pind Daan",
    languages: ["Hindi", "English"],
    about:
      "Pandit Sharma combines astrology with rituals to provide holistic solutions for Pitru Dosha.",
    reviews: [
      "Helped us with both rituals and astrological remedies.",
      "Kind and very knowledgeable."
    ]
  },
  {
    id: 6,
    name: "Pandit Harish Tiwari",
    photo: "/images/pd6.jpeg",
    experience: 18,
    rating: 4.7,
    specialty: "Pitru Dosh Nivaran Pooja",
    languages: ["Hindi", "Sanskrit"],
    about:
      "Pandit Tiwari is highly respected for his expertise in Pitru Dosh Nivaran and complex rituals.",
    reviews: [
      "Great knowledge and very supportive.",
      "Explained remedies very clearly."
    ]
  },
  {
    id: 7,
    name: "Pandit Rajeev Jha",
    photo: "/images/pd7.jpeg",
    experience: 9,
    rating: 4.4,
    specialty: "Falgu Ghat Pooja",
    languages: ["Hindi", "Maithili"],
    about:
      "Pandit Jha performs Falgu Ghat Pooja with authenticity, guiding families with devotion.",
    reviews: [
      "Very calm and understanding.",
      "Did pooja with full rituals and explanation."
    ]
  },
  {
    id: 8,
    name: "Pandit Vinod Pathak",
    photo: "/images/pd8.jpeg",
    experience: 14,
    rating: 4.6,
    specialty: "Shraddha Karma",
    languages: ["Hindi", "English"],
    about:
      "Pandit Pathak is an expert in Shraddha Karma and guides families through every step.",
    reviews: [
      "Very professional approach.",
      "Our family was very satisfied."
    ]
  },
  {
    id: 9,
    name: "Pandit Dinesh Chaturvedi",
    photo: "/images/pd9.jpeg",
    experience: 11,
    rating: 4.5,
    specialty: "Astrology + Rituals",
    languages: ["Hindi", "English"],
    about:
      "Pandit Chaturvedi combines astrological insights with rituals to provide complete solutions.",
    reviews: [
      "Very insightful and knowledgeable.",
      "Helped us with remedies and rituals together."
    ]
  },
  {
    id: 10,
    name: "Pandit Alok Upadhyay",
    photo: "/images/pd10.jpeg",
    experience: 7,
    rating: 4.2,
    specialty: "Daily Pooja & Pitru Tarpan",
    languages: ["Hindi"],
    about:
      "Pandit Upadhyay helps devotees with daily pooja, tarpan, and small rituals.",
    reviews: [
      "Simple and honest.",
      "Did rituals with full dedication."
    ]
  },
  {
    id: 11,
    name: "Pandit Manish Dubey",
    photo: "/images/pd11.jpeg",
    experience: 13,
    rating: 4.6,
    specialty: "Pitru Paksha Special Pooja",
    languages: ["Hindi", "Sanskrit"],
    about:
      "Pandit Dubey is known for special Pitru Paksha rituals with scriptural accuracy.",
    reviews: [
      "Very professional and punctual.",
      "Explained each mantra and ritual."
    ]
  },
  {
    id: 12,
    name: "Pandit Gopal Mishra",
    photo: "/images/pd12.jpeg",
    experience: 16,
    rating: 4.7,
    specialty: "Vishnupad Temple Rituals",
    languages: ["Hindi", "English"],
    about:
      "Pandit Mishra has deep knowledge of Vishnupad temple rituals in Gaya Ji.",
    reviews: [
      "Did the rituals perfectly at Vishnupad.",
      "Knowledgeable and humble."
    ]
  },
  {
    id: 13,
    name: "Pandit Ramesh Pandey",
    photo: "/images/pd13.jpeg",
    experience: 19,
    rating: 4.8,
    specialty: "Gaya Ji Pind Daan",
    languages: ["Hindi", "Sanskrit"],
    about:
      "Pandit Ramesh Pandey has over 19 years of experience in Pind Daan rituals.",
    reviews: [
      "Highly experienced and respected.",
      "Our rituals went smoothly under his guidance."
    ]
  },
  {
    id: 14,
    name: "Pandit Shyam Prasad",
    photo: "/images/pd14.jpeg",
    experience: 6,
    rating: 4.1,
    specialty: "Small Poojas & Shraddha",
    languages: ["Hindi"],
    about:
      "Pandit Shyam helps devotees with small daily poojas and Shraddha rituals.",
    reviews: [
      "Very simple and polite.",
      "Helped us with basic rituals."
    ]
  },
  {
    id: 15,
    name: "Pandit Pradeep Joshi",
    photo: "/images/pd15.jpeg",
    experience: 17,
    rating: 4.7,
    specialty: "Advanced Vedic Rituals",
    languages: ["Hindi", "English", "Sanskrit"],
    about:
      "Pandit Joshi specializes in advanced Vedic rituals and Pitru Dosha remedies.",
    reviews: [
      "One of the best pandits we have met.",
      "Explained everything thoroughly."
    ]
  }
];



export default function PanditPage() {
  const [selectedPandit, setSelectedPandit] = useState<number | null>(null);
  const [bookingPandit, setBookingPandit] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [waitingConfirmation, setWaitingConfirmation] = useState<boolean>(false);

  const handleBookNow = (id: number) => {
    setBookingPandit(id);
    setDate("");
    setTime("");
    setWaitingConfirmation(false);
  };

  const handleConfirmBooking = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    setWaitingConfirmation(true);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Pandit Booking</h1>
      <p className="text-gray-600 max-w-2xl text-center mx-auto mb-12">
        Book experienced pandits for Pind Daan rituals with proper guidance and authentic traditions.
      </p>

      {/* Pandit Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pandits.map((pandit) => (
          <div key={pandit.id} className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={pandit.photo}
              alt={pandit.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{pandit.name}</h2>
            <p className="text-gray-600">Experience: {pandit.experience} years</p>
            <p className="text-yellow-600 font-medium">⭐ {pandit.rating} / 5</p>
            <p className="italic text-gray-700">{pandit.specialty}</p>
            <button
              onClick={() =>
                setSelectedPandit(selectedPandit === pandit.id ? null : pandit.id)
              }
              className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              {selectedPandit === pandit.id ? "Hide Info" : "More Info"}
            </button>

            {/* Expanded Info */}
            {selectedPandit === pandit.id && (
              <div className="mt-4 text-left border-t pt-4">
                <p>
                  <span className="font-bold">Languages:</span>{" "}
                  {pandit.languages.join(", ")}
                </p>
                <p className="mt-2">
                  <span className="font-bold">About:</span> {pandit.about}
                </p>
                <div className="mt-3">
                  <span className="font-bold">Reviews:</span>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    {pandit.reviews.map((review, i) => (
                      <li key={i}>{review}</li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                {bookingPandit !== pandit.id && (
                  <button
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    onClick={() => handleBookNow(pandit.id)}
                  >
                    Book Now
                  </button>
                )}

                {/* Date & Time Picker */}
                {bookingPandit === pandit.id && !waitingConfirmation && (
                  <div className="mt-4">
                    <label className="block mb-2 font-semibold">Select Date:</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    />

                    <label className="block mb-2 font-semibold">Select Time:</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    />

                    <button
                      onClick={handleConfirmBooking}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}

                {/* Waiting Confirmation */}
                {waitingConfirmation && (
                  <div className="mt-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-center">
                    ⏳ Waiting for Confirmation...
                    <p className="text-sm mt-1">Date: {date} | Time: {time}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}