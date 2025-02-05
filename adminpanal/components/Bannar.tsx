import React from 'react';
import Image from 'next/image';


const Bannar = ({ imgLink }: { imgLink: string }) => {
    return (
        <div className="w-full my-2">
            <Image
                src={imgLink}
                alt="chak_Kr_Dekho"
                className="w-full"
                // Set a fixed height and width for the image
                width={100}
                height={100}
                // Make the image responsive
                layout="responsive"
            />
        </div>
    );
};

export default Bannar;