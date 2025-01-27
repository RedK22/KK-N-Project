import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 py-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/3">
          <Image
            src="/k.jpg"
            width={800}
            height={600}
            alt="Nutritionist's Image"
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-8 lg:mb-0 mt-10 md:mt-0">
          <div className="inline-block mb-2 px-4 py-2 bg-green-100 rounded-full">
            <p className="uppercase text-green-600 tracking-wide font-semibold text-sm">
              ABOUT ME
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 relative group">
            <span className="text-gray-900">Kritika Khurana</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-600 origin-left scale-x-90"></span>
          </h1>
          <p className="mt-3 md:text-xl text-md text-gray-500 max-w-2xl mx-auto lg:mx-0">
            I&apos;m Kritika, a{" "}
            <span className="text-green-600">Clinical Nutritionist</span> on a
            mission to make health simple and sustainable for you. With a{" "}
            <span className="text-green-600">BSc in Food and Nutrition</span>{" "}
            from the <span className="text-green-600">University of Delhi</span>
            , an{" "}
            <span className="text-green-600">MSc in Clinical Nutrition</span>{" "}
            from <span className="text-green-600">London</span>, and over{" "}
            <span className="text-green-600">3 years</span> of experience in
            India and UK. <br /> I specialize in figuring out what&apos;s
            causing health issues and creating easy nutrition plans to fix them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
