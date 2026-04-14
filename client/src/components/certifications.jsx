import { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Generative AI Application Developer",
    image: "/images/certificate3.png",
    publication: "",
  },
  {
    id: 2,
    title: "Web App Development In ASP.NET PHP",
    image: "/images/certificate1.jpeg",
    publication: "",
  },
  {
    id: 3,
    title: "Author Certificate",
    image: "/images/certificate2.jpeg",
    publication: "https://journal.50sea.com/index.php/IJIST/article/view/1720",
  },
  {
    id: 4,
    title: "Qonkar Experience Certificate",
    image: "/images/certificate4.png",
    publication: "",
  },
];

function CloseIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function Modal({ cert, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-3 sm:px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors duration-200"
        >
          <CloseIcon />
        </button>

        {/* Full Certificate Image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full object-scale-down max-h-[70vh] sm:max-h-[80vh]"
        />

        {/* Title */}
        <div className="p-3 sm:p-4 text-center">
          <h3 className="text-white text-xs sm:text-sm font-bold">{cert.title}</h3>
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, onClick }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#1e293b] hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group w-full max-w-sm mx-auto cursor-pointer">

      {/* Image — clickable */}
      <div
        onClick={() => onClick(cert)}
        className="overflow-hidden h-40 sm:h-48 relative"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-scale-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/80 px-3 py-1.5 rounded-full">
            Click to View
          </span>
        </div>
      </div>

      {/* Title + Publication */}
      <div className="p-2.5 sm:p-3 flex flex-col items-center gap-2">
        <h3 className="text-white text-xs sm:text-sm font-bold text-center leading-snug">
          {cert.title}
        </h3>

        {cert.publication && (
          <a
            href={cert.publication}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-blue-400 hover:text-purple-400 transition-colors duration-200 text-xs font-medium underline underline-offset-2"
          >
            <LinkIcon />
            View Publication
          </a>
        )}
      </div>

    </div>
  );
}

function CertificationsAndAchievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-14 sm:py-20">

      {selectedCert && (
        <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      <div className="max-w-7xl w-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Certifications
          </h2>
          <p className="text-gray-400 text-base sm:text-xl mt-3 sm:mt-4">
            Courses & credentials I've earned
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} onClick={setSelectedCert} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CertificationsAndAchievements;