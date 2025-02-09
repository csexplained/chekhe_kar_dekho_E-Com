import React from 'react';

const fans = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const FansPage = () => {
  return (
    <div className="bg-[#FFF9EA]  py-6 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="text-4xl md:text-5xl lg:text-6xl text-center font-intel my-10 md:my-16 lg:my-16">
        What Fan Have To <span className="text-custom-red">Say!!</span>
      </div>

      {/* Scrollable Fan Cards */}
      <div className="flex justify-center items-center  gap-6 px-4 py-4">
        {fans.map((fan) => (
          <div
            key={fan.id}
            className="min-w-[200px] md:min-w-[240px] lg:min-w-[260px] h-72 md:h-80 lg:h-80 bg-black rounded-xl snap-center"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FansPage;
