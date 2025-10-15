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
      className="bg-gradient-to-br from-slate-100 via-sky-100 to-slate-300 text-black font-semibold px-6 py-3 rounded-xl border border-sky-200/30 shadow-md shadow-indigo-900/50 hover:brightness-110 transition inline-block text-center"
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
    >
      {title}
    </a>
  );
}

export default Button;
