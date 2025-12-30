import React from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const PageHeader = ({
  backgroundImage,
  title,
  subtitleLine1,
  subtitleLine2,
  showRating = false,
  rating = "4.7/5",
  reviews = "91 Reviews",
  badges = [],
}) => {
  return (
    <section
      className="relative h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mt-10">
        {/* ⭐ Rating Badge (Optional) */}
        {showRating && (
          <div className="mb-6 inline-flex items-center gap-3 border border-gray-700 rounded-full px-5 py-2 text-sm font-medium">
            <div className="flex text-yellow-400 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <span>{rating}</span>
            <span className="border border-gray-700 rounded-full px-2 py-1">
              {reviews}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-semibold mb-8 uppercase">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg font-semibold">
          {subtitleLine1}
        </p>
        {subtitleLine2 && (
          <p className="text-gray-300 text-base md:text-lg mb-8 font-semibold">
            {subtitleLine2}
          </p>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md"
              >
                <BsArrowRightShort size={20} className="bg-[#028BFA] text-black" />
                {badge}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
