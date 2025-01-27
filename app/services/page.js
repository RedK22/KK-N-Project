import {PlansAndServices} from "@/components/PlansAndServices";
import React from "react";

const plans = [
  {
    name: "Basic Nutrition",
    price: "₹x",
    description: "Perfect for those just starting their health journey",
    features: [
      "Initial consultation",
      "Personalized meal plan",
      "1 follow-up session",
      "Email support",
    ],
  },
  {
    name: "Comprehensive Wellness",
    price: "₹x",
    description: "Ideal for those seeking in-depth nutritional guidance",
    features: [
      "Detailed health assessment",
      "Customized nutrition strategy",
      "3 follow-up sessions",
      "24/7 chat support",
      "Recipe suggestions",
    ],

    featured: true,
  },
  {
    name: "Performance Nutrition",
    price: "₹x",
    description: "Tailored for athletes and fitness enthusiasts",
    features: [
      "Sports-specific nutrition plan",
      "Performance optimization strategies",
      "5 follow-up sessions",
      "Pre and post-workout meal plans",
      "Supplement guidance",
    ],
  },
];

const page = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 mb-10">
        <div className="inline-block mb-2 px-4 py-2 bg-green-100 rounded-full">
          <p className="uppercase text-green-600 tracking-wide font-semibold text-sm">
            SERVICES & PLANS
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900  relative group mb-12">
          <span className="text-gray-900">
            Discover My <span className="text-green-600">Services</span> and{" "}
            <span className="text-green-600">Plans</span>
          </span>
        </h1>

        {/* Cards for Plans? */}
        <PlansAndServices plans={plans} />
      </section>
    </div>
  );
};

export default page;
