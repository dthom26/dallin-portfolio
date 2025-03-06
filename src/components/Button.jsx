import React from "react";

function Button({ href, title }) {
  return (
    <button
      className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 text-black font-semibold
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
