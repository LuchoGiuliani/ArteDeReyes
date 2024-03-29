import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="background_footer h-full flex justify-around items-center">
        <a href="https://github.com/LuchoGiuliani">
          <img
            className="max-w-[24px] hover:scale-110"
            src="/github.png"
            target="_blank"
            alt="github"
          />
        </a>
        <a
          href="https://www.instagram.com/arte.de.reyes/?hl=es"
          target="_blank"
        >
          <img
            className="max-w-[24px] hover:scale-110"
            href="https://www.instagram.com/arte.de.reyes/?hl=es"
            target="_blank"
            src="/instagram.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
}
