'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/Logo.png';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="sticky top-0 w-full px-6 md:px-16 lg:px-16 h-[105px] flex justify-between items-center bg-white shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={logo} width={80} height={80} alt="logo" className="h-20 w-auto cursor-pointer" />

          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-6 text-lg font-normal">
            <Link className="text-[#B81F2E] hover:text-black transition-colors duration-200" href="/">Home</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/shop">Shop</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/sale">Sale</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/launchingSoon">Launching soon</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/ourStory">Our Story</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/contactUs">Contact Us</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/gifting">Gifting</Link>
          </nav>
        </div>

        {/* Right Side: Search and Menu */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Hidden on Small Screens) */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-12 h-9 border border-gray-400 rounded-full focus:outline-none focus:border-[#B81F2E] transition-colors duration-200"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#B81F2E] text-white p-2 rounded-full hover:bg-[#9e1a26] transition-colors duration-200">
              <CiSearch size={16} />
            </button>
          </div>

          {/* Icons */}
          <div className='flex gap-4 justify-center items-center'>
            <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-75 transition-opacity duration-200">
              <path d="M19.0466 0.378395C16.6187 0.378395 14.493 1.42243 13.168 3.18718C11.843 1.42243 9.71729 0.378395 7.28944 0.378395C5.35683 0.380573 3.50399 1.14926 2.13743 2.51583C0.77087 3.88239 0.00217829 5.73522 0 7.66783C0 15.8978 12.2028 22.5594 12.7224 22.8346C12.8594 22.9082 13.0125 22.9468 13.168 22.9468C13.3235 22.9468 13.4766 22.9082 13.6136 22.8346C14.1333 22.5594 26.336 15.8978 26.336 7.66783C26.3338 5.73522 25.5652 3.88239 24.1986 2.51583C22.832 1.14926 20.9792 0.380573 19.0466 0.378395ZM13.168 20.9299C11.0212 19.6789 1.88114 13.9802 1.88114 7.66783C1.88301 6.23404 2.45341 4.8595 3.46726 3.84565C4.4811 2.83181 5.85564 2.26141 7.28944 2.25954C9.5762 2.25954 11.4961 3.47758 12.298 5.43397C12.3688 5.60648 12.4894 5.75403 12.6443 5.85787C12.7992 5.96171 12.9815 6.01716 13.168 6.01716C13.3545 6.01716 13.5368 5.96171 13.6917 5.85787C13.8466 5.75403 13.9672 5.60648 14.038 5.43397C14.8399 3.47405 16.7598 2.25954 19.0466 2.25954C20.4804 2.26141 21.8549 2.83181 22.8688 3.84565C23.8826 4.8595 24.453 6.23404 24.4549 7.66783C24.4549 13.9708 15.3125 19.6778 13.168 20.9299Z" fill="black" />
            </svg>
            <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-75 transition-opacity duration-200">
              <path d="M24.6462 0.520432H2.36188C1.82459 0.520432 1.30931 0.733868 0.929386 1.11379C0.549466 1.49371 0.336029 2.00899 0.336029 2.54628V20.7789C0.336029 21.3162 0.549466 21.8315 0.929386 22.2114C1.30931 22.5913 1.82459 22.8048 2.36188 22.8048H24.6462C25.1835 22.8048 25.6988 22.5913 26.0787 22.2114C26.4586 21.8315 26.6721 21.3162 26.6721 20.7789V2.54628C26.6721 2.00899 26.4586 1.49371 26.0787 1.11379C25.6988 0.733868 25.1835 0.520432 24.6462 0.520432ZM24.6462 20.7789H2.36188V2.54628H24.6462V20.7789ZM19.5816 6.59798C19.5816 8.20984 18.9413 9.75569 17.8015 10.8954C16.6618 12.0352 15.1159 12.6755 13.504 12.6755C11.8922 12.6755 10.3463 12.0352 9.20657 10.8954C8.06681 9.75569 7.4265 8.20984 7.4265 6.59798C7.4265 6.32933 7.53322 6.07169 7.72318 5.88173C7.91314 5.69177 8.17078 5.58505 8.43942 5.58505C8.70807 5.58505 8.96571 5.69177 9.15567 5.88173C9.34563 6.07169 9.45235 6.32933 9.45235 6.59798C9.45235 7.67255 9.87922 8.70312 10.6391 9.46296C11.3989 10.2228 12.4295 10.6497 13.504 10.6497C14.5786 10.6497 15.6092 10.2228 16.369 9.46296C17.1289 8.70312 17.5557 7.67255 17.5557 6.59798C17.5557 6.32933 17.6625 6.07169 17.8524 5.88173C18.0424 5.69177 18.3 5.58505 18.5687 5.58505C18.8373 5.58505 19.0949 5.69177 19.2849 5.88173C19.4749 6.07169 19.5816 6.32933 19.5816 6.59798Z" fill="black" />
            </svg>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:opacity-75 transition-opacity duration-200">
              <path d="M26.8588 23.7842C24.9323 20.4536 21.9635 18.0654 18.4988 16.9333C20.2126 15.9131 21.5441 14.3585 22.2888 12.5083C23.0336 10.6581 23.1504 8.61461 22.6213 6.6916C22.0923 4.76859 20.9466 3.07242 19.3602 1.86356C17.7739 0.6547 15.8345 0 13.8401 0C11.8456 0 9.90629 0.6547 8.31993 1.86356C6.73357 3.07242 5.58789 4.76859 5.05882 6.6916C4.52976 8.61461 4.64656 10.6581 5.3913 12.5083C6.13605 14.3585 7.46754 15.9131 9.18132 16.9333C5.71666 18.0642 2.74786 20.4524 0.821366 23.7842C0.750718 23.8994 0.703858 24.0276 0.68355 24.1612C0.663242 24.2948 0.669899 24.4311 0.703126 24.5621C0.736353 24.6931 0.795478 24.8161 0.877013 24.9238C0.958548 25.0316 1.06084 25.1219 1.17786 25.1895C1.29487 25.2571 1.42424 25.3006 1.55833 25.3174C1.69241 25.3342 1.8285 25.3239 1.95857 25.2872C2.08863 25.2506 2.21004 25.1882 2.31562 25.1039C2.4212 25.0195 2.50882 24.9149 2.5733 24.7962C4.95644 20.6775 9.16867 18.2185 13.8401 18.2185C18.5115 18.2185 22.7237 20.6775 25.1068 24.7962C25.1713 24.9149 25.2589 25.0195 25.3645 25.1039C25.4701 25.1882 25.5915 25.2506 25.7216 25.2872C25.8516 25.3239 25.9877 25.3342 26.1218 25.3174C26.2559 25.3006 26.3853 25.2571 26.5023 25.1895C26.6193 25.1219 26.7216 25.0316 26.8031 24.9238C26.8847 24.8161 26.9438 24.6931 26.977 24.5621C27.0102 24.4311 27.0169 24.2948 26.9966 24.1612C26.9763 24.0276 26.9294 23.8994 26.8588 23.7842ZM6.75644 9.11097C6.75644 7.70996 7.17189 6.34041 7.95025 5.17551C8.72861 4.01062 9.83492 3.10269 11.1293 2.56655C12.4236 2.0304 13.8479 1.89012 15.222 2.16345C16.5961 2.43677 17.8583 3.11142 18.849 4.10208C19.8396 5.09275 20.5143 6.35493 20.7876 7.72902C21.0609 9.10311 20.9206 10.5274 20.3845 11.8218C19.8484 13.1161 18.9404 14.2224 17.7755 15.0008C16.6106 15.7792 15.2411 16.1946 13.8401 16.1946C11.962 16.1926 10.1614 15.4456 8.83341 14.1176C7.5054 12.7896 6.75845 10.989 6.75644 9.11097Z" fill="black" />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 p-4 shadow-lg fixed top-[105px] w-full z-40">
          <nav className="flex flex-col gap-4 text-lg">
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/" onClick={toggleMenu}>Home</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/shop" onClick={toggleMenu}>Shop</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/sale" onClick={toggleMenu}>Sale</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/launchingSoon" onClick={toggleMenu}>Launching soon</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/ourStory" onClick={toggleMenu}>Our Story</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/contactUs" onClick={toggleMenu}>Contact Us</Link>
            <Link className="hover:text-[#B81F2E] transition-colors duration-200" href="/gifting" onClick={toggleMenu}>Gifting</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;