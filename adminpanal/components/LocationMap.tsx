import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div className="px-12 pb-6" style={{ width: "100%", height: "450px" }}>
      <iframe
        width="100%"
        height="100%"
        className="rounded-5xl mb-4"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.177686763765!2d77.11581047511831!3d28.654397875652855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0376b5cb93b5%3A0xb8ac8c74cd9ff8f!2sSukhchain%20Singh%20Mehta%20Chowk!5e0!3m2!1sen!2sin!4v1738757528509!5m2!1sen!2sin"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default MapComponent;
