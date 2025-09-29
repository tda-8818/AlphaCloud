import React from "react";

const MessageBox = ({ message, color, visible }) => (
  <div
    className={`
      fixed top-20 right-4 p-4 rounded-lg shadow-lg text-white 
      transition-opacity duration-300 z-50 
      ${visible ? "opacity-100" : "opacity-0 hidden"} ${color}
    `}
  >
    {message}
  </div>
);

export default MessageBox;