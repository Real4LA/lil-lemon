import React from "react";
import "./Specials.css";
import sp1 from "./assets/Special1.jpg";
import sp2 from "./assets/Special2.jpg";
import sp3 from "./assets/Special3.jpg";
import icon from "./assets/del.jpg";
const Specials = () => {
  return (
    <section id="specials">
      <card>
        <img class="sp" src={sp1} alt="SpecialDish1" />
        <h2>
          Greek salas <span>12.99$</span>
        </h2>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div>
          <h3>Order a delivery</h3>
          <img class="icon" src={icon} alt="DeliveryIcon" />
        </div>
      </card>
      <card>
        <img class="sp" src={sp2} alt="SpecialDish1" />
        <h2>
          Bruchetta <span>5.99$</span>
        </h2>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div>
          <h3>Order a delivery</h3>
          <img class="icon" src={icon} alt="DeliveryIcon" />
        </div>
      </card>
      <card>
        <img class="sp" src={sp3} alt="SpecialDish1" />
        <h2>
          Lemon Dessert <span>5.00$</span>
        </h2>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div>
          <h3>Order a delivery</h3>
          <img class="icon" src={icon} alt="DeliveryIcon" />
        </div>
      </card>
    </section>
  );
};

export default Specials;
