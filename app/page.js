import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {PlansAndServices} from "@/components/PlansAndServices";
import {AccordionDets} from "@/components/AccordionDets";

export default function Home() {
  return (
    <div className="bg-white py-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
              <span className="text-green-600">Healthy</span> Choices <br />
              Made <span className="text-green-600">Simple</span>
            </h1>
            <p className="mt-3 text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0">
              Discover personalized nutrition plans tailored to your unique
              needs and goals. Let's embark on a journey to better health
              together.
            </p>
            <div className="mt-8">
              <Link href="/services">
                <Button className="px-8 py-6 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md transition duration-300 ease-in-out">
                  Discover My Services Today
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/h2.jpg"
              width={700}
              height={500}
              alt="Healthy food"
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 py-10">
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
              from the{" "}
              <span className="text-green-600">University of Delhi</span>, an{" "}
              <span className="text-green-600">MSc in Clinical Nutrition</span>{" "}
              from <span className="text-green-600">London</span>, and over{" "}
              <span className="text-green-600">3 years</span> of experience in
              India and UK. <br /> I specialize in figuring out what&apos;s
              causing health issues and creating easy nutrition plans to fix
              them.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button className="px-8 py-6 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md transition duration-300 ease-in-out">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="">
          <div className=" lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-block mb-2 px-4 py-2 bg-green-100 rounded-full">
              <p className="uppercase text-green-600 tracking-wide font-semibold text-sm">
                FAQ
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 relative group">
              <span className="text-gray-900">Frequently Asked Questions</span>
            </h1>
          </div>

          {/* Accordion */}
          <div className="py-10 bg-gray-50 rounded-md px-5">
            <AccordionDets />
          </div>
        </div>
      </section>
    </div>
  );
}
