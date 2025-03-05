import React from "react";

function Button({ href, title }) {
  return (
    <button
      className="bg-gradient-to-br from-sky-400 via-indigo-600 to-blue-900 text-white font-semibold
    px-6 py-3 rounded-xl
    border border-sky-200/30
    shadow-md shadow-indigo-900/50
    hover:brightness-110 transition"
    >
      <a href={href}>{title}</a>
    </button>
  );
}

export default Button;
