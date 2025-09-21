"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-3">About Us</h1>
          <p className="text-sm text-gray-500">Atmanirbhar Bharat’s Blend of Faith, Heritage & Travel.</p>
        </header>

        <div className="space-y-8">
          <article>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="leading-relaxed text-gray-700">
              We exist to help devotees fulfill their religious duties with faith, authenticity, and ease. Our platform brings together verified Pandits, complete puja packages, hotel bookings, and local cultural experiences in Gaya, so that you can focus on devotion while we take care of logistics.

At the heart of our mission lies Swadeshi and Atmanirbhar Bharat—we empower local Pandits, hotels, artisans, and service providers by giving them a trusted digital platform. By choosing us, you not only preserve India’s timeless traditions but also support the local economy and make heritage-driven tourism truly self-reliant.

We embrace authenticity, transparency, and respect for traditions, while blending them with modern convenience—building a bridge between faith, heritage, and Atmanirbhar Bharat.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Pandit Booking (Verified & Certified)</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Choose from a curated list of experienced and certified pandits who specialise in Pind Daan and
                  related ancestral rites. Each pandit profile includes credentials, languages spoken, user
                  reviews and availability — book directly through our platform for peace of mind and authenticity.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Complete Puja Package</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Our all-in-one puja package includes every samagri required for the ritual — from sacred rice and
                  pind-bhoj items to specially prepared offerings. Packages are prepared following traditional
                  guidelines and supplied by trusted local vendors. You can also customise or upgrade your package
                  based on family traditions.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Brahman Bhoj & Event Booking</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
              We provide Brahman Bhoj services with proper arrangements. Food is prepared as per rituals and served with care and hygiene.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Hotel & Stay Bookings</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                 We partner with hotels across budgets — from guest houses near the Vishnupad Temple to comfortable family hotels and lodges. Filter by proximity, price, room type, and special amenities like vegetarian meals or monk-friendly spaces.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">How Our Packages Work</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>
                <strong>Choose a Service:</strong> Select Pandit only, Puja package, Pandit + Bhoj, or a complete combo (Pandit,
                Samagri, Bhoj, Stay).
              </li>
              <li>
                <strong>Customise:</strong> Choose the package of your choice and book hotels according to your convenience and preference.
              </li>
              <li>
                <strong>Confirm & Pay:</strong> Make a secure payment and receive your booking confirmation.
              </li>
              <li>
                <strong>On-ground Support:</strong> Local coordinators and the pandit arrive on the scheduled day and perform the ritual.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">Promoting Gaya’s Heritage & Local Life</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond rituals, we actively promote Gaya’s rich cultural landscape. Our site highlights key attractions like the Vishnupad Temple, the Falgu River, Sita Kund, Bodhi Tree at Bodh Gaya, the ancient Barabar Caves, and many more. We help you explore all of Bodh Gaya while collaborating with local artisans and market vendors to showcase handmade crafts, traditional clothing, and religious souvenirs — encouraging the Swadeshi spirit and supporting Atmanirbhar Bharat.

            <p className="text-gray-700 leading-relaxed mt-3">
                Food is central to culture — our curated guides introduce visitors to regional favourites such as litti chokha, local sweets, and temple-friendly snacks, while also supporting local vendors and small businesses.
            </p>
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">Spotlight: Supporting Conservation & The Bodhi Tree</h2>
            <p className="text-gray-700 leading-relaxed">
              We promote eco-responsible tourism. Through partnerships with the local botanical garden and temple
              authorities, we help raise awareness about conservation of sacred sites like the Bodhi Tree in Bodh Gaya.
              Visitors are encouraged to follow guidelines that protect these living monuments — from respectful offerings
              to waste-free visits.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">Trust, Safety & Authenticity</h2>
            <p className="text-gray-700 leading-relaxed">
              All pandits are authorized by Gaya authorities and fully verified. We ensure rituals are performed correctly and respectfully. Payments are encrypted and refunds are
              handled fairly for cancellations or changes.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>End-to-end service from booking to on-ground coordination.</li>
              <li>Transparent pricing and verified pandit profiles.</li>
              <li>Customisable packages that respect family traditions.</li>
              <li>Local partnerships supporting Gaya’s markets, artisans and conservation efforts.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>Q: Do you provide pandits who speak regional languages?</strong>
                <p>Yes — we have pandits who speak multi language and read past reviews to pick the right match for your family.</p>
              </div>

              <div>
                <strong>Q: Can I book during Pitru Paksha?</strong>
                <p>Absolutely. We highlight peak dates and help secure pandits and samagri well in advance.</p>
              </div>

              <div>
                <strong>Q: Is hotel booking refundable?</strong>
                <p>Refund policies depend on the hotel partner; we clearly share cancellation and refund terms at booking.
                </p>
              </div>
            </div>
          </article>
          <footer className="text-center mt-6">
            <p className="text-gray-600">Contact us: <a href="mailto:support@pinddaanservices.com" className="text-orange-600">support@pinddaanservices.com</a> | Phone: +91 98765 43210</p>
            <p className="text-xs text-gray-400 mt-2">©️ {new Date().getFullYear()} PindDaan Services. All rights reserved.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}