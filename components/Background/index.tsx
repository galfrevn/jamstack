import React from "react";

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="h-full bg-[url('https://res.cloudinary.com/qwertytesting123/image/upload/v1660689466/bg_txsa8a.jpg')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"
        style={{ transform: "translateY(0px)" }}
      ></div>
    </div>
  );
};

export default Background;
