import Image from 'next/image';
import React from 'react';
import '@fontsource/oswald'; // Ensure Oswald font is imported

const pickles = [
  { id: 1, image: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738662985/ew5ibeokqhwfvte9qtnd.jpg" },
  { id: 2, image: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738662985/ew5ibeokqhwfvte9qtnd.jpg" },
  { id: 3, image: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738662985/ew5ibeokqhwfvte9qtnd.jpg" },
];

const Definately = () => {
  return (
    <div className="my-10 pt-14 mx-4 md:mx-10 lg:mx-14 xl:mx-14">
      {/* Heading Section */}
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-inter text-center">
        You Definitely <span className="text-custom-red">Love This</span>
      </div>

      {/* Scrollable Image Grid */}
      <div className="flex  my-12 gap-6 md:gap-8 lg:gap-12 px-4">
        {pickles.map((pickle) => (
          <div
            key={pickle.id}
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] snap-center flex flex-col items-center rounded-xl overflow-hidden relative"
          >

            <Image
              src={pickle.image}
              alt={"loading"}
              className="object-cover w-full h-full"
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Definately;