import React from "react";
import { v4 as uuidv4 } from "uuid";
import SpecialCard from "../../components/SpecialCard";
import Button from "../../components/Button";
import greekSaladImage from "../../assets/images/greek-salad.jpg";
import bruschettaImage from "../../assets/images/bruschetta.jpg";
import lemonDessertImage from "../../assets/images/lemon-dessert.jpg";

function Specials() {
  const specialsData = [
    {
      id: uuidv4(),
      image: greekSaladImage,
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary.",
    },
    {
      id: uuidv4(),
      image: bruschettaImage,
      title: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: uuidv4(),
      image: lemonDessertImage,
      title: "Lemon Dessert",
      price: 5.0,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section
      className="specials container"
      aria-labelledby="specials-title"
    >
      <div className="specials-header">
        <h2 id="specials-title">This Week's Specials!</h2>

        <Button
          onClick={() => console.log("Online Menu")}
          label="Online Menu"
          aria-label="View the full online menu"
        />
      </div>

      <div className="specials-items" role="list">
        {specialsData.map((special) => (
          <SpecialCard
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
            onOrder={() => alert(`Ordered: ${special.title}`)}
            aria-label={`Special item: ${special.title}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
