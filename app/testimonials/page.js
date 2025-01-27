import {TestimonialsData} from "@/components/TestimonialsData";
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque? Voluptates quas non dignissimos vitae totam velit quos consequuntur nesciunt.",
  },
  {
    name: "Michael Chen",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque? Voluptates quas non dignissimos vitae totam velit quos consequuntur nesciunt.",
  },
  {
    name: "Emily Rodriguez",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque? Voluptates quas non dignissimos vitae totam velit quos consequuntur nesciunt.",
  },
  {
    name: "Raj Patel",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque? Voluptates quas non dignissimos vitae totam velit quos consequuntur nesciunt.",
  },
];

const page = () => {
  return (
    <div>
      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="inline-block mb-2 px-4 py-2 bg-green-100 rounded-full">
          <p className="uppercase text-green-600 tracking-wide font-semibold text-sm">
            TESTIMONIALS
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 relative group">
          <span className="text-gray-900">Testimonials</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Hear from some of our satisfied clients about their experiences and
          results
        </p>

        {/* Testimonials Start Here */}
        <div>
          <TestimonialsData testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default page;
