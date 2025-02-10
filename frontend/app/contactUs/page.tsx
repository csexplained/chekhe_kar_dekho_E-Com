"use client";
import React from 'react';
import Image from 'next/image';
import LocationMap from '../../components/LocationMap';
import Bannar from '@/components/Bannar';


// Reusable Contact Card Component
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, buttonText }) => {
  return (
    <div className='bg-white border border-[#B81F2E59] flex flex-col items-start justify-start rounded-3xl p-6 text-center'>
      <div className="mb-4">{icon}</div>
      <p className='text-lg font-semibold mb-2'>{title}</p>
      <p className='text-sm text-gray-600 mb-4'>{description}</p>
      <button className='bg-custom-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors'>
        {buttonText}
      </button>
    </div>
  );
};

const Page = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for contacting us! We will get back to you soon.');
        form.reset(); // Reset the form after successful submission
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      <Bannar index={0} />

      {/* Main Content Section */}
      <div className="container mx-auto px-12 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png"}
              alt="Chakh Kar Dekho"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white font-inter p-8 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-normal mb-4">Do You Need Help?</h1>
            <p className="text-sm text-[#000000] mb-6">
              If you&apos;d like further information about Chakh Kar Dekho, please get in
              touch. Simply fill out the form, include your message, and we&apos;ll get
              back to you as soon as we can.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms Hidden Inputs */}
              <input
                type="hidden"
                name="access_key"
                value="d5f983c4-9589-4f4f-b0fe-e350e983ac31" // Replace with your Web3Forms access key
              />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="from_name" value="Chakh Kar Dekho Website" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#000000]">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    className="mt-1 w-full p-3 border border-black rounded-full bg-[#FFF9EA]"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phone"
                    className="mt-1 w-full p-3 border border-black rounded-full bg-[#FFF9EA]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full p-3 border border-black rounded-full bg-[#FFF9EA]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full p-3 border border-black rounded-xl bg-[#FFF9EA]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-custom-red rounded-full hover:bg-red-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="bg-[#FFF9EA] border border-[#B81F2E] rounded-xl mt-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard
              icon={
                <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.4375 8.02734H14.6042C8.35417 8.02734 4.1875 11.1523 4.1875 18.444V33.0273C4.1875 40.319 8.35417 43.444 14.6042 43.444H35.4375C41.6875 43.444 45.8542 40.319 45.8542 33.0273V18.444C45.8542 11.1523 41.6875 8.02734 35.4375 8.02734ZM36.4167 20.7148L29.8958 25.9232C28.5208 27.0273 26.7708 27.569 25.0208 27.569C23.2708 27.569 21.5 27.0273 20.1458 25.9232L13.625 20.7148C12.9583 20.1732 12.8542 19.1732 13.375 18.5065C13.9167 17.8398 14.8958 17.7148 15.5625 18.2565L22.0833 23.4648C23.6667 24.7357 26.3542 24.7357 27.9375 23.4648L34.4583 18.2565C35.125 17.7148 36.125 17.819 36.6458 18.5065C37.1875 19.1732 37.0833 20.1732 36.4167 20.7148Z" fill="#0E0E0E" />
                </svg>
              }
              title="Email"
              description="customercare@chakhkardekho.com"
              buttonText="Contact"
            />
            <ContactCard
              icon={
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.7305 27.1977L28.2529 26.6252C27.1776 26.487 26.1199 26.9016 25.3619 27.7504L22.1184 31.3827C17.1296 28.54 13.0399 23.9799 10.5015 18.3736L13.7627 14.7216C14.5207 13.8727 14.8908 12.6883 14.7675 11.4841L14.2562 6.50947C14.0447 4.51567 12.5463 3.01538 10.7483 3.01538H7.69859C5.70662 3.01538 4.04958 4.871 4.17298 7.10169C5.10727 23.9602 17.1472 37.4233 32.184 38.4696C34.176 38.6077 35.833 36.7521 35.833 34.5214V31.1063C35.8506 29.1125 34.5109 27.4345 32.7305 27.1977Z" fill="#0E0E0E" />
                </svg>
              }
              title="Phone"
              description="Office. +91 9625920070"
              buttonText="Call"
            />
            <ContactCard
              icon={
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4773 28.5352C19.0398 28.5352 18.6023 28.3077 18.3573 27.9052C17.9898 27.2927 18.1823 26.4702 18.8123 26.1027L20.3698 25.1752V23.2852C20.3698 22.5677 20.9648 21.9727 21.6823 21.9727C22.3998 21.9727 22.9948 22.5677 22.9948 23.2852V25.9102C22.9948 26.3652 22.7498 26.8027 22.3648 27.0302L20.1773 28.3427C19.9323 28.4652 19.7048 28.5352 19.4773 28.5352Z" fill="#292D32" />
                  <path d="M36.9103 12.9613C35.4228 11.3162 32.9552 10.4938 29.3327 10.4938H28.9128V10.4238C28.9128 7.48375 28.9127 3.84375 22.3328 3.84375H19.6727C13.0927 3.84375 13.0927 7.48375 13.0927 10.4238V10.4938H12.6727C9.05025 10.4938 6.56525 11.3162 5.09525 12.9613C3.36275 14.9038 3.41525 17.4762 3.59025 19.2437L3.60775 19.3663L3.74433 20.9597C3.75753 21.1137 3.84111 21.2529 3.97076 21.3369C4.51102 21.6871 5.09688 22.066 5.65525 22.3763C5.90025 22.5338 6.16275 22.6737 6.42525 22.8138C8.40275 23.8988 10.5203 24.7563 12.6903 25.3513C12.7428 29.8838 16.4528 33.5588 21.0028 33.5588C25.5877 33.5588 29.3152 29.8312 29.3152 25.2463V25.1763C31.5202 24.5113 33.6378 23.5838 35.6152 22.4288C35.7202 22.3763 35.7902 22.3238 35.8778 22.2713C36.6172 21.8694 37.3861 21.3347 38.0761 20.8434C38.1918 20.7609 38.2667 20.6331 38.2824 20.4919L38.3278 20.0838L38.4153 19.2612C38.4328 19.1562 38.4327 19.0687 38.4502 18.9462C38.5902 17.1962 38.5553 14.7812 36.9103 12.9613ZM15.5952 10.4238C15.5952 7.44875 15.5952 6.32875 19.6727 6.32875H22.3328C26.4102 6.32875 26.4102 7.44875 26.4102 10.4238V10.4938H15.5952V10.4238ZM21.0028 30.9338C18.1152 30.9338 15.7177 28.7637 15.3677 25.9637C15.3327 25.7362 15.3152 25.4912 15.3152 25.2463C15.3152 22.1137 17.8702 19.5587 21.0028 19.5587C24.1353 19.5587 26.6902 22.1137 26.6902 25.2463C26.6902 25.4562 26.6727 25.6488 26.6552 25.8412V25.8587C26.3402 28.7113 23.9252 30.9338 21.0028 30.9338Z" fill="#292D32" />
                  <path d="M36.9841 24.6783C37.3472 24.4668 37.8273 24.768 37.789 25.1865L37.1494 32.177C36.7819 35.677 35.3469 39.247 27.6469 39.247H14.3119C6.61187 39.247 5.17688 35.677 4.82688 32.1945L4.19967 25.4788C4.16186 25.074 4.59726 24.7959 4.9524 24.9939C5.03205 25.0383 5.10369 25.0775 5.15938 25.107C6.52438 25.8595 7.94187 26.5245 9.39437 27.0495C9.93687 27.242 10.3219 27.697 10.4794 28.257C11.7919 32.807 16.0269 36.1845 20.9969 36.1845C26.0544 36.1845 30.3244 32.737 31.5669 28.012C31.7069 27.452 32.0919 26.997 32.6344 26.787C34.1044 26.2095 35.5044 25.527 36.8169 24.7745C36.8485 24.757 36.9083 24.7225 36.9841 24.6783Z" fill="#292D32" />
                </svg>
              }
              title="Working Hours"
              description="Monday - Friday | 9:00 AM - 5:00 AM"
              buttonText="Open"
            />
          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <div className="mt-8">
        <LocationMap />
      </div>
    </div>
  );
};

export default Page;