import { useEffect } from "react";

const BotPenguin = () => {
  useEffect(() => {
    window.botpenguin = window.botpenguin || {};
    window.botpenguin.botIds = [
      "6946a220bdb6af04d6641a42",
      "6946a12943ae703cb7b0cdca"
    ];

    const script = document.createElement("script");
    script.src = "https://cdn.botpenguin.com/website-bot.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default BotPenguin;
