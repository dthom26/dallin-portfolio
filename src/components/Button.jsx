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
      className="btn-primary"
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
    >
      {title}
    </a>
  );
}

export default Button;
