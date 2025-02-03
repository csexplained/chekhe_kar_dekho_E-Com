import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div className="px-12 " style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.136722389735!2d76.49593242505195!3d26.96256932661746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397275005de91119%3A0xf37eef7f4f78c160!2sStarbucks!5e0!3m2!1sen!2sin!4v1738586548779!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="rounded-5xl"
        style={{ border: 0 , borderRadius : "20px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
