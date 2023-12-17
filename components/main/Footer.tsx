import React from "react";
import Image from 'next/image';
export const Socials = [
    {
      name: "Instagram",
      src: "/instagram.svg",
      link: "https://www.instagram.com/basuuki.r/",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
      link: "https://www.facebook.com/basuuki.r/",
    },
  ];

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
          <a key={index} href='{social.link}' target="_blank">
            <Image 
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          ))}
        </div>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">+62 896-0527-0805</span>    
                    </p>
                    <a href="mailto:raharjobasuki471@gmail.com flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">raharjobasuki471@gmail.com</span>  
                    </a>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer