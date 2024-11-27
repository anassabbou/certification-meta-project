import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function TestimonialsCard({ name, feedback, rating, image }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i < rating ? fullStar : emptyStar}
          className="testimonial-star"
          aria-label={i < rating ? "Full star" : "Empty star"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-card" role="article" aria-labelledby={`${name}-testimonial`}>
      <div className="testimonial-card-header">
        <img
          src={image}
          alt={`${name}`}
          className="testimonial-image"
        />
        <div>
          <p id={`${name}-testimonial`} className="testimonial-name">{name}</p>
          <div className="testimonial-rating" aria-label={`Rating: ${rating} out of 5`}>
            {renderStars()}
          </div>
        </div>
      </div>
      <p className="testimonial-feedback" aria-label="Feedback">
        "{feedback}"
      </p>
    </div>
  );
}

TestimonialsCard.propTypes = {
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialsCard;
