import React from 'react';

const newsItems = [
  // --- Pind Daan News ---
  {
    title: 'President Performs Pind Daan Rituals in Gaya',
    summary: 'On September 20, 2025, President Droupadi Murmu visited Gaya to perform the traditional Hindu ritual of "pind daan," believed to offer salvation to the souls of ancestors.',
    link: 'https://timesofindia.indiatimes.com/city/patna/president-performs-pind-daan-rituals-in-gaya-with-emotional-resonance/articleshow/124014787.cms',
    source: 'Times of India'
  },
  {
    title: 'Mukesh Ambani Performs Pind Daan at Vishnupad Temple',
    summary: 'On September 19, 2025, Reliance Group chairman Mukesh Ambani, accompanied by his son Anant, offered Pind Daan at Gaya\'s Vishnupad Temple.',
    link: 'https://patnapress.com/ambani-gaya-pind-daan/',
    source: 'Patna Press'
  },
  {
    title: 'Visitors from Russia, Ukraine & Spain Participate in Pind Daan',
    summary: 'International pilgrims from Russia, Ukraine, and Spain recently participated in the Pind Daan rituals in Gaya, highlighting the global interest in Indian spiritual practices.',
    link: 'https://timesofindia.indiatimes.com/city/patna/visitors-from-russia-ukraine-spain-perform-pind-daan-rituals/articleshow/123978577.cms',
    source: 'Times of India'
  },
  {
    title: 'Over 2.4 Million Pilgrims Attend Pitru Paksha Fair in Gaya',
    summary: 'As the Pitru Paksha fair enters its 11th day, over 2.4 million pilgrims have participated in Pind Daan rituals at Gaya\'s sacred altars.',
    link: 'https://patnapress.com/pind-daan-mund-prishtha-adi-gaya-pitru-paksha/',
    source: 'Patna Press'
  },
  {
    title: 'Mata Sita\'s Sand-Ball Pind Daan Tradition Continues',
    summary: 'On the ninth day of the Pitru Paksha Mela, devotees continued the tradition of Mata Sita\'s sand-ball Pind Daan for King Dasharath at Ram Gaya.',
    link: 'https://patnapress.com/mata-sita-pind-daan-raja-dashrath-pitru-paksha-gaya/amp/',
    source: 'Patna Press'
  },

  // --- Gaya Development / Industry News ---
  {
    title: 'Gaya and Nalanda Selected for Development Under Swadesh Darshan 2.0',
    summary: 'The Ministry of Tourism has selected Gaya and Nalanda for development under the revamped Swadesh Darshan 2.0 scheme, aiming to promote sustainable and responsible tourism in these heritage-rich destinations.',
    link: 'https://pib.gov.in/Pressreleaseshare.aspx?PRID=1884910',
    source: 'Press Information Bureau'
  },
  {
    title: 'IMC Gaya to Attract Multiple Industries, Including Handloom & Handicrafts',
    summary: 'The Integrated Manufacturing Cluster (IMC) in Gaya is set to attract industries such as handloom and handicrafts, engineering, and medical equipment, with a projected investment of ₹16,524 crore and the potential to create over 1.09 lakh jobs.',
    link: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2072787',
    source: 'Press Information Bureau'
  },
  {
    title: 'Tourism Department Emphasizes Gaya as a Year-Round Destination',
    summary: 'The Ministry of Tourism has emphasized promoting Gaya as a year-round destination for tourists of all ages, highlighting its rich Buddhist heritage and the initiatives undertaken for its development.',
    link: 'https://tourism.gov.in/sites/default/files/2021-10/PressReleasePage.pdf',
    source: 'Ministry of Tourism'
  },
  {
    title: 'Bihar Integrated Manufacturing City (Gaya) to Attract ₹16,000 Crore Investment',
    summary: 'The Bihar Integrated Manufacturing City (IMC) in Gaya is poised to attract an investment of ₹16,000 crore, aiming to boost industrial growth and employment in the region.',
    link: 'https://manufacturing.economictimes.indiatimes.com/news/industry/bihar-integrated-manufacturing-city-takes-shape-spv-formed-to-attract-rs-16k-cr-investment/117053902',
    source: 'ET Manufacturing / TaxTMI'
  }
];

const NewsSection = () => (
  <section className="bg-white py-8">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Gaya on the Path of Aatmanirbhar Bharat</h2>
      <ul className="space-y-6">
        {newsItems.map((item, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-700 mt-1">{item.summary}</p>
            <a
              href={item.link}
              className="text-yellow-600 hover:underline mt-1 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
            <p className="text-sm text-gray-500 mt-1">Source: {item.source}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NewsSection;