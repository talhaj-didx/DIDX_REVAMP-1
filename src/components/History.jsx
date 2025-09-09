import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ----------------- Reusable InfoSection -----------------
const InfoSection = ({ title, description, imageUrl, imageAlt, imagePosition = "left" }) => {
  const isLeft = imagePosition === "left";

//   useGSAP(() => {
//     gsap.from(".info-section", {
//       opacity: 0,
//       y: 40,
//       duration: 1,
//       stagger: 0.2,
//       scrollTrigger: {
//         trigger: ".info-section",
//         start: "top 85%",
//       },
//     });
//   }, []);

  return (
    <div className="info-section flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto my-[120px] md:my-[120px] px-6">
      {isLeft && (
        <div className="flex-1">
          <img src={imageUrl} alt={imageAlt} className="rounded-xl shadow-md w-full" />
        </div>
      )}
      <div className="flex-1">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#333] mb-4">{title}</h2>
        <p className="text-[16px] leading-relaxed text-[#333]">{description}</p>
      </div>
      {!isLeft && (
        <div className="flex-1">
          <img src={imageUrl} alt={imageAlt} className="rounded-xl shadow-md w-full" />
        </div>
      )}
    </div>
  );
};

// ----------------- QuoteSection -----------------
const QuoteSection = ({ title, quote, authorName, authorTitle, authorImageUrl }) => {
  return (
    <div className="bg-[#FBFBFB] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#333] mb-6">{title}</h2>
        <p className="text-[16px] leading-relaxed text-[#333] mb-8">“{quote}”</p>
        <div className="flex flex-col items-center">
          <img src={authorImageUrl} alt={authorName} className="w-16 h-16 rounded-full mb-3" />
          <p className="font-semibold text-[#333]">{authorName}</p>
          <p className="text-sm text-gray-600">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

// ----------------- CTA Section -----------------
const CtaSection = () => {
  return (
    <div className="bg-[#F5FAFC] py-20 text-center">
      <h2 className="text-2xl md:text-[32px] font-bold text-[#333] mb-6">
        Interested in our latest chapter?
      </h2>
      <a href="#" className="text-[#00A4D6] font-semibold hover:underline">
        Learn about Moz’s Products →
      </a>
    </div>
  );
};

// ----------------- Main Page -----------------
const HistoryPage = () => {
  return (
    <div className="bg-[#FBFBFB]">
      {/* Section 1 */}
      <InfoSection
        imagePosition="left"
        title="Our founding"
        description="Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz..."
        imageUrl="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
        imageAlt="Founder smiling"
      />

      {/* Section 2 */}
      <InfoSection
        imagePosition="right"
        title="Early growth & funding"
        description="After a glimpse of the demand, we shifted our focus from consulting to software..."
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        imageAlt="Office workspace"
      />

      {/* Section 3 */}
      <InfoSection
        imagePosition="left"
        title="Series B Funding"
        description="A series B investment from the Foundry Group propelled our efforts..."
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        imageAlt="Chess pieces"
      />

      {/* Section 4 */}
      <InfoSection
        imagePosition="right"
        title="A new leaf"
        description="With our broader marketing efforts in full swing, we rebranded from SEOmoz to Moz in 2013..."
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        imageAlt="10 Years Anniversary"
      />

      {/* Section 5 */}
      <InfoSection
        imagePosition="left"
        title="To Infinity and Beyond!"
        description="With SEO more important than ever, in 2016 we made a difficult but necessary decision..."
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
        imageAlt="Man on stairs"
      />

      {/* Section 6 */}
      <InfoSection
        imagePosition="right"
        title="Better Together"
        description="In 2018 Moz acquired STAT Search Analytics, combining Moz’s keyword and link research tools..."
        imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
        imageAlt="Team working together"
      />

      {/* Section 7 */}
      <InfoSection
        imagePosition="left"
        title="Moz Group"
        description="The Moz Group was formed in 2021 following the acquisition by iContact..."
        imageUrl="https://images.unsplash.com/photo-1581090700227-4c4c0a4b2c89"
        imageAlt="Moz Group logo placeholder"
      />

      {/* Quote Section */}
      <QuoteSection
        title="Where Does the Name 'Moz' Come From?"
        quote="Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla, and Chefmoz..."
        authorName="Rand Fishkin"
        authorTitle="Founder at Moz"
        authorImageUrl="https://images.unsplash.com/photo-1603415526960-f7e0328f0d1d"
      />

      {/* CTA */}
      <CtaSection />
    </div>
  );
};

export default HistoryPage;
