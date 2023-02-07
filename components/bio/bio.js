import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import Description from "./description";

const Bio = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl p7-2 text-teal-600 font-medium">
          Sahar Behbahani
        </h2>
        <h3 className="text-2xl py-2">Frontend Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Experienced Frontend developer with more than 5 years experience in
          developing products by using: React, TypeScrpt, NextJs,...
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillInstagram />
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:w-96 md:h-96   mt-20 mx-auto overflow-hidden">
        <Image src={avatar} layout="fill" objectFit="cover" />
      </div>
     <Description/>
    </>
  );
};
export default Bio;
