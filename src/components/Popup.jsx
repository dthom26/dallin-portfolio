import React from "react";

const Popup = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-white rounded-2xl p-4 sm:p-8 max-w-xs sm:max-w-md md:max-w-2xl w-full mx-2 sm:mx-4 relative shadow-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxSizing: "border-box",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
          {project.name}
        </h2>
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-4 w-full h-32 sm:h-40 object-cover"
        />
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          {project.description}
        </p>

        {/* Key Skills Section */}
        {project.skills && (
          <div className="mb-6">
            <h3 className="text-base sm:text-[1.2rem] font-semibold mb-2 text-gray-900">
              Key Skills Demonstrated
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features Section */}
        {project.features && (
          <div>
            <h3 className="text-base sm:text-[1.2rem] font-semibold mb-2 text-gray-900">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
