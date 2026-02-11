import React from "react";

function Button({ href, title }) {
  const isInternal = href && href.startsWith("#");

  const handleClick = (e) => {
    if (isInternal) {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="bg-gradient-to-br from-emerald-300 via-teal-200 to-cyan-300 text-slate-900 font-semibold px-6 py-3 rounded-xl border border-emerald-400/30 shadow-md shadow-emerald-900/50 hover:brightness-110 transition inline-block text-center"
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
    >
      {title}
    </a>
  );
}

export default Button;
