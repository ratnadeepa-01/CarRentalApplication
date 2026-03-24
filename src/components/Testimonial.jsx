import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = () => {

  const testimonials = [
    {
      text: "The car was extremely clean and the booking process was very smooth. Perfect service for weekend trips!",
      name: "Rahul Sharma",
      role: "Software Engineer",
      image: assets.testimonial_image_1
    },
    {
      text: "Affordable pricing and excellent customer support. Pickup and return process was very quick.",
      name: "Ananya Patel",
      role: "Marketing Manager",
      image: assets.testimonial_image_2
    },
    {
      text: "I rented an SUV for my family vacation and the experience was fantastic. Highly recommended!",
      name: "Vikram Singh",
      role: "Travel Blogger",
      image: assets.user_profile
    },
    {
      text: "Great experience overall. The car was in perfect condition and customer support was very helpful.",
      name: "Priya Nair",
      role: "Entrepreneur",
      image: assets.testimonial_image_1
    }
  ];

  return (
    <section className=" py-20 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden bg-light">

      <Title
        title="What Our Customers Say"
        subTitle="Discover why travelers choose our car rental service for comfortable and reliable journeys."
      />

      {/* Animation styles */}
      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-container {
          animation: scroll 20s linear infinite;
        }
        `}
      </style>

      <div className="relative mt-16 overflow-hidden">

        <div className="flex gap-6 scroll-container">

          {[...testimonials, ...testimonials].map((testimonial, index) => (

            <div
              key={index}
              className="bg-white min-w-[320px] rounded-xl shadow-md p-6"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm mb-6">
                {testimonial.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonial;