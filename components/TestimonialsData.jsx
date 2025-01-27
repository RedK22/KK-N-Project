import * as React from "react";

import {Card, CardContent} from "@/components/ui/card";

export function TestimonialsData({testimonials}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-white border-2 border-green-500 relative"
        >
          <CardContent className="p-6">
            <p className="text-gray-700 mb-8">{testimonial.content}</p>
            <p className="text-green-600 font-semibold absolute bottom-4 right-6">
              {testimonial.name}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
