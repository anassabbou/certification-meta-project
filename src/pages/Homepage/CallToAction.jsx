import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import resturantFood from "../../assets/images/restaurant-food.jpg";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="call-to-action" aria-labelledby="cta-title">
      <div className="container">
        <div className="call-to-action-text">
          <h1 id="cta-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant that blends traditional recipes with a modern twist.
            Experience the vibrant flavors of the Mediterranean in a warm and welcoming setting.
          </p>

          <Button
            onClick={() => navigate("/booking")}
            label="Reserve a table"
            aria-label="Reserve a table at Little Lemon"
          />
        </div>

        <img
          src={resturantFood}
          alt="Delicious Mediterranean food on a rustic table"
          className="call-to-action-image"
        />
      </div>
    </section>
  );
}

export default CallToAction;
