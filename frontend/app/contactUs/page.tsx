import React from 'react';
import Image1 from '../../public/Delhi_tak.png';
import logo from '../../public/Logo.png';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';
import img from '../../public/DSC09773.png';
import LocationMap from '../../components/LocationMap'
import Footer from '../../components/Footer'

const Page = () => {
  return (
    <div className="">
      <div className="bg-yellow-400 text-black text-center py-2 font-inter">
        Upto 70% Off on orders above Rs999
      </div>

      <div className="mx-20 my-8 flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src={logo} width={60} height={60} alt="logo" />
          </div>

          <div className="flex gap-8 ml-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Sale</Link>
            <Link href="/">Launching soon</Link>
            <Link href="/">Our Story</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-12 py-2 border border-black rounded-full focus:outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="p-2 bg-red-700 rounded-full">
                <CiSearch className="text-white" />
              </button>
            </span>
          </div>
          <div className="ml-4">
          <svg width="143" height="26" viewBox="0 0 143 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0466 1.3784C16.6187 1.3784 14.493 2.42243 13.168 4.18718C11.843 2.42243 9.71729 1.3784 7.28944 1.3784C5.35683 1.38057 3.50399 2.14926 2.13743 3.51583C0.77087 4.88239 0.00217829 6.73522 0 8.66783C0 16.8978 12.2028 23.5594 12.7224 23.8346C12.8594 23.9082 13.0125 23.9468 13.168 23.9468C13.3235 23.9468 13.4766 23.9082 13.6136 23.8346C14.1333 23.5594 26.336 16.8978 26.336 8.66783C26.3338 6.73522 25.5652 4.88239 24.1986 3.51583C22.832 2.14926 20.9792 1.38057 19.0466 1.3784ZM13.168 21.9299C11.0212 20.6789 1.88114 14.9802 1.88114 8.66783C1.88301 7.23404 2.45341 5.8595 3.46726 4.84565C4.4811 3.83181 5.85564 3.26141 7.28944 3.25954C9.5762 3.25954 11.4961 4.47758 12.298 6.43397C12.3688 6.60648 12.4894 6.75403 12.6443 6.85787C12.7992 6.96171 12.9815 7.01716 13.168 7.01716C13.3545 7.01716 13.5368 6.96171 13.6917 6.85787C13.8466 6.75403 13.9672 6.60648 14.038 6.43397C14.8399 4.47405 16.7598 3.25954 19.0466 3.25954C20.4804 3.26141 21.8549 3.83181 22.8688 4.84565C23.8826 5.8595 24.453 7.23404 24.4549 8.66783C24.4549 14.9708 15.3125 20.6778 13.168 21.9299Z" fill="black"/>
<path d="M80.6462 1.52043H58.3619C57.8246 1.52043 57.3093 1.73387 56.9294 2.11379C56.5495 2.49371 56.3361 3.00899 56.3361 3.54628V21.7789C56.3361 22.3162 56.5495 22.8315 56.9294 23.2114C57.3093 23.5913 57.8246 23.8048 58.3619 23.8048H80.6462C81.1835 23.8048 81.6988 23.5913 82.0787 23.2114C82.4586 22.8315 82.6721 22.3162 82.6721 21.7789V3.54628C82.6721 3.00899 82.4586 2.49371 82.0787 2.11379C81.6988 1.73387 81.1835 1.52043 80.6462 1.52043ZM80.6462 21.7789H58.3619V3.54628H80.6462V21.7789ZM75.5816 7.59798C75.5816 9.20984 74.9413 10.7557 73.8015 11.8954C72.6618 13.0352 71.1159 13.6755 69.5041 13.6755C67.8922 13.6755 66.3464 13.0352 65.2066 11.8954C64.0668 10.7557 63.4265 9.20984 63.4265 7.59798C63.4265 7.32933 63.5332 7.07169 63.7232 6.88173C63.9132 6.69177 64.1708 6.58505 64.4395 6.58505C64.7081 6.58505 64.9657 6.69177 65.1557 6.88173C65.3457 7.07169 65.4524 7.32933 65.4524 7.59798C65.4524 8.67255 65.8792 9.70312 66.6391 10.463C67.3989 11.2228 68.4295 11.6497 69.5041 11.6497C70.5786 11.6497 71.6092 11.2228 72.3691 10.463C73.1289 9.70312 73.5558 8.67255 73.5558 7.59798C73.5558 7.32933 73.6625 7.07169 73.8524 6.88173C74.0424 6.69177 74.3 6.58505 74.5687 6.58505C74.8373 6.58505 75.095 6.69177 75.2849 6.88173C75.4749 7.07169 75.5816 7.32933 75.5816 7.59798Z" fill="black"/>
<path d="M138.859 23.7842C136.932 20.4536 133.963 18.0654 130.499 16.9333C132.213 15.9131 133.544 14.3585 134.289 12.5083C135.034 10.6581 135.15 8.61461 134.621 6.6916C134.092 4.76859 132.947 3.07242 131.36 1.86356C129.774 0.6547 127.834 0 125.84 0C123.846 0 121.906 0.6547 120.32 1.86356C118.734 3.07242 117.588 4.76859 117.059 6.6916C116.53 8.61461 116.647 10.6581 117.391 12.5083C118.136 14.3585 119.467 15.9131 121.181 16.9333C117.717 18.0642 114.748 20.4524 112.821 23.7842C112.751 23.8994 112.704 24.0276 112.683 24.1612C112.663 24.2948 112.67 24.4311 112.703 24.5621C112.736 24.6931 112.795 24.8161 112.877 24.9238C112.958 25.0316 113.061 25.1219 113.178 25.1895C113.295 25.2571 113.424 25.3006 113.558 25.3174C113.692 25.3342 113.828 25.3239 113.959 25.2872C114.089 25.2506 114.21 25.1882 114.316 25.1039C114.421 25.0195 114.509 24.9149 114.573 24.7962C116.956 20.6775 121.169 18.2185 125.84 18.2185C130.511 18.2185 134.724 20.6775 137.107 24.7962C137.171 24.9149 137.259 25.0195 137.364 25.1039C137.47 25.1882 137.591 25.2506 137.722 25.2872C137.852 25.3239 137.988 25.3342 138.122 25.3174C138.256 25.3006 138.385 25.2571 138.502 25.1895C138.619 25.1219 138.722 25.0316 138.803 24.9238C138.885 24.8161 138.944 24.6931 138.977 24.5621C139.01 24.4311 139.017 24.2948 138.997 24.1612C138.976 24.0276 138.929 23.8994 138.859 23.7842ZM118.756 9.11097C118.756 7.70996 119.172 6.34041 119.95 5.17551C120.729 4.01062 121.835 3.10269 123.129 2.56655C124.424 2.0304 125.848 1.89012 127.222 2.16345C128.596 2.43677 129.858 3.11142 130.849 4.10208C131.84 5.09275 132.514 6.35493 132.788 7.72902C133.061 9.10311 132.921 10.5274 132.384 11.8218C131.848 13.1161 130.94 14.2224 129.775 15.0008C128.611 15.7792 127.241 16.1946 125.84 16.1946C123.962 16.1926 122.161 15.4456 120.833 14.1176C119.505 12.7896 118.758 10.989 118.756 9.11097Z" fill="black"/>
</svg>
          </div>
        </div>
      </div>
      


      
      <div className="">
        <Image src={Image1} height={1000} width={1000} className="w-full" alt="Image1" />
      </div>



      <div className="flex items-center gap-20 my-8 mx-20">
        {/* Image Section */}
        <div className='w-1/2'>
          <Image src={img} height={400} width={400} alt="image" layout='responsive' className="rounded" />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold font-intel mb-4">Do You Need Help?</h1>
          <p className="text-sm text-gray-600  mb-6">
            If you&apos;d like further information about Chakh Kar Dekho, please get in
            touch. Simply fill out the form, include your message, and we&apos;ll get
            back to you as soon as we can.
          </p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 w-full p-3 border border-black rounded-full  bg-custom-bg-fan "
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="mt-1 w-full p-3 border border-black rounded-full bg-custom-bg-fan "
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
                className="mt-1 w-full p-3 border border-black rounded-full bg-custom-bg-fan "
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={3}
                className="mt-1 w-full p-3 border border-black rounded-xl bg-custom-bg-fan "
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-custom-red rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


<div className='bg-custom-bg-fan border border-red-500    rounded-xl mx-20 p-8'>
      <div className='mx-20  border-red-500 flex   gap-20'>


        <div className='bg-white border border-red-500 flex flex-col rounded-xl px-8'>
        <svg className='my-8 ml-4' width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.4375 8.02734H14.6042C8.35417 8.02734 4.1875 11.1523 4.1875 18.444V33.0273C4.1875 40.319 8.35417 43.444 14.6042 43.444H35.4375C41.6875 43.444 45.8542 40.319 45.8542 33.0273V18.444C45.8542 11.1523 41.6875 8.02734 35.4375 8.02734ZM36.4167 20.7148L29.8958 25.9232C28.5208 27.0273 26.7708 27.569 25.0208 27.569C23.2708 27.569 21.5 27.0273 20.1458 25.9232L13.625 20.7148C12.9583 20.1732 12.8542 19.1732 13.375 18.5065C13.9167 17.8398 14.8958 17.7148 15.5625 18.2565L22.0833 23.4648C23.6667 24.7357 26.3542 24.7357 27.9375 23.4648L34.4583 18.2565C35.125 17.7148 36.125 17.819 36.6458 18.5065C37.1875 19.1732 37.0833 20.1732 36.4167 20.7148Z" fill="#0E0E0E"/>
</svg>
<p className='mb-6 ml-4 '>Email</p>
<p className='ml-4 mb-4'>customercare@chakhkardekho.com</p>
<button className='bg-custom-red mx-4 my-2 text-white px-2 py-2 rounded-full mx-4 my-2'>Contact</button>

        </div>


        <div className='bg-white border border-red-500 flex flex-col rounded-xl px-8'>
        <svg className='my-8 ml-4' width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.7305 27.1977L28.2529 26.6252C27.1776 26.487 26.1199 26.9016 25.3619 27.7504L22.1184 31.3827C17.1296 28.54 13.0399 23.9799 10.5015 18.3736L13.7627 14.7216C14.5207 13.8727 14.8908 12.6883 14.7675 11.4841L14.2562 6.50947C14.0447 4.51567 12.5463 3.01538 10.7483 3.01538H7.69859C5.70662 3.01538 4.04958 4.871 4.17298 7.10169C5.10727 23.9602 17.1472 37.4233 32.184 38.4696C34.176 38.6077 35.833 36.7521 35.833 34.5214V31.1063C35.8506 29.1125 34.5109 27.4345 32.7305 27.1977Z" fill="#0E0E0E"/>
</svg>

<p className='mb-6 ml-4 '>Email</p>
<p className='ml-4 mb-4'>customercare@chakhkardekho.com</p>
<button className='bg-custom-red text-white mx-4 my-2 px-2 py-2 rounded-full mx-4 my-2'>Contact</button>



        </div>
        <div className='bg-white border border-red-500 flex flex-col rounded-xl px-8'>
        <svg className='my-8 ml-4' width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4773 28.5352C19.0398 28.5352 18.6023 28.3077 18.3573 27.9052C17.9898 27.2927 18.1823 26.4702 18.8123 26.1027L20.3698 25.1752V23.2852C20.3698 22.5677 20.9648 21.9727 21.6823 21.9727C22.3998 21.9727 22.9948 22.5677 22.9948 23.2852V25.9102C22.9948 26.3652 22.7498 26.8027 22.3648 27.0302L20.1773 28.3427C19.9323 28.4652 19.7048 28.5352 19.4773 28.5352Z" fill="#292D32"/>
<path d="M36.9103 12.9613C35.4228 11.3162 32.9552 10.4938 29.3327 10.4938H28.9128V10.4238C28.9128 7.48375 28.9127 3.84375 22.3328 3.84375H19.6727C13.0927 3.84375 13.0927 7.48375 13.0927 10.4238V10.4938H12.6727C9.05025 10.4938 6.56525 11.3162 5.09525 12.9613C3.36275 14.9038 3.41525 17.4762 3.59025 19.2437L3.60775 19.3663L3.74433 20.9597C3.75753 21.1137 3.84111 21.2529 3.97076 21.3369C4.51102 21.6871 5.09688 22.066 5.65525 22.3763C5.90025 22.5338 6.16275 22.6737 6.42525 22.8138C8.40275 23.8988 10.5203 24.7563 12.6903 25.3513C12.7428 29.8838 16.4528 33.5588 21.0028 33.5588C25.5877 33.5588 29.3152 29.8312 29.3152 25.2463V25.1763C31.5202 24.5113 33.6378 23.5838 35.6152 22.4288C35.7202 22.3763 35.7902 22.3238 35.8778 22.2713C36.6172 21.8694 37.3861 21.3347 38.0761 20.8434C38.1918 20.7609 38.2667 20.6331 38.2824 20.4919L38.3278 20.0838L38.4153 19.2612C38.4328 19.1562 38.4327 19.0687 38.4502 18.9462C38.5902 17.1962 38.5553 14.7812 36.9103 12.9613ZM15.5952 10.4238C15.5952 7.44875 15.5952 6.32875 19.6727 6.32875H22.3328C26.4102 6.32875 26.4102 7.44875 26.4102 10.4238V10.4938H15.5952V10.4238ZM21.0028 30.9338C18.1152 30.9338 15.7177 28.7637 15.3677 25.9637C15.3327 25.7362 15.3152 25.4912 15.3152 25.2463C15.3152 22.1137 17.8702 19.5587 21.0028 19.5587C24.1353 19.5587 26.6902 22.1137 26.6902 25.2463C26.6902 25.4562 26.6727 25.6488 26.6552 25.8412V25.8587C26.3402 28.7113 23.9252 30.9338 21.0028 30.9338Z" fill="#292D32"/>
<path d="M36.9841 24.6783C37.3472 24.4668 37.8273 24.768 37.789 25.1865L37.1494 32.177C36.7819 35.677 35.3469 39.247 27.6469 39.247H14.3119C6.61187 39.247 5.17688 35.677 4.82688 32.1945L4.19967 25.4788C4.16186 25.074 4.59726 24.7959 4.9524 24.9939C5.03205 25.0383 5.10369 25.0775 5.15938 25.107C6.52438 25.8595 7.94187 26.5245 9.39437 27.0495C9.93687 27.242 10.3219 27.697 10.4794 28.257C11.7919 32.807 16.0269 36.1845 20.9969 36.1845C26.0544 36.1845 30.3244 32.737 31.5669 28.012C31.7069 27.452 32.0919 26.997 32.6344 26.787C34.1044 26.2095 35.5044 25.527 36.8169 24.7745C36.8485 24.757 36.9083 24.7225 36.9841 24.6783Z" fill="#292D32"/>
</svg>

<p className='mb-6 ml-4 '>Email</p>
<p className='ml-4 mb-4'>customercare@chakhkardekho.com</p>
<button className='bg-custom-red text-white px-2 py-2 rounded-full mx-4 my-2'>Contact</button>



        </div>

      </div>

      </div>

<div>
      <LocationMap/>

      </div>

      <div className="bg-custom-green flex mt-20 py-2 justify-between">
  <p className="text-white text-2xl py-4">RY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg  className='mx-8 ' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  

</div>

<div className="bg-custom-bg-fan">
<Footer/>
</div>
      
    </div>
  );
};

export default Page;
