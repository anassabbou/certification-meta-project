import React from "react";
import resturantChef from "../../assets/images/restaurant-chef.jpg";
import resturantFood from "../../assets/images/restaurant-food.jpg";
import OverlayImages from "../../components/OverlayImages";

function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-title">
      <div className="container chicago-container">
        <div className="chicago-text">
          <h2 id="chicago-title" className="section-title">
            Our Story
          </h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of Chicago. Our dishes are inspired by traditional
            Mediterranean flavors, prepared fresh every day with locally sourced
            ingredients.
          </p>
          <p>
            Whether you're here for a casual lunch or a special dinner, Little
            Lemon offers a welcoming atmosphere and a memorable dining
            experience.
          </p>
        </div>

        <div className="chicago-image-container">
          <OverlayImages
            primaryImg={resturantFood}
            primaryAlt="A beautifully arranged table with Mediterranean food"
            secondaryImg={resturantChef}
            secondaryAlt="Chef preparing food in the kitchen"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
