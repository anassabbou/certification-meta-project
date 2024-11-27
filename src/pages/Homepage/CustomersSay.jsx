import React from "react";
import { v4 as uuidv4 } from "uuid";
import testimonial1 from "../../assets/images/testimonials/Testimonial-1.png";
import testimonial2 from "../../assets/images/testimonials/Testimonial-2.png";
import testimonial3 from "../../assets/images/testimonials/Testimonial-3.png";
import testimonial4 from "../../assets/images/testimonials/Testimonial-4.png";
import TestimonialsCard from "../../components/TestimonialCard";

function CustomersSay() {
  const testimonials = [
    {
      id: uuidv4(),
      name: "Jane Smith",
      feedback: "Amazing food and great service!",
      rating: 5,
      image: testimonial1,
    },
    {
      id: uuidv4(),
      name: "John Doe",
      feedback: "I love the atmosphere and the flavors.",
      rating: 4,
      image: testimonial2,
    },
    {
      id: uuidv4(),
      name: "Emily Brown",
      feedback: "One of the best Mediterranean restaurants in town.",
      rating: 5,
      image: testimonial3,
    },
    {
      id: uuidv4(),
      name: "Alex Johnson",
      feedback: "Great value for the price. Highly recommend!",
      rating: 4,
      image: testimonial4,
    },
  ];

  return (
    <section className="customers-say" aria-labelledby="customers-say-title">
      <div className="container">
        <h2 id="customers-say-title" className="section-title">
          What Customers Say
        </h2>
        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialsCard
                name={testimonial.name}
                feedback={testimonial.feedback}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
