import React from "react";
import "./Testimonials.css";
import t1 from "./assets/Testimonial1.jpg";
import t2 from "./assets/Testimonial2.jpg";
import t3 from "./assets/Testimonial3.jpg";
import t4 from "./assets/Testimonial4.jpg";
const Testimonials = () => {
  return (
    <div id="testiAll">
      <h1>Testimonials</h1>
      <section id="testimonials">
        <card className="testis">
          <h2>
            Rating: <span>4.6</span>
          </h2>
          <div>
            <img className="test" src={t1} alt="person1" />
            <h3>Jhon</h3>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </card>
        <card className="testis">
          <h2>
            Rating: <span>4.9</span>
          </h2>
          <div>
            <img className="test" src={t2} alt="person2" />
            <h3>Luke</h3>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </card>
        <card className="testis">
          <h2>
            Rating: <span>5.0</span>
          </h2>
          <div>
            <img className="test" src={t3} alt="person3" />
            <h3>David</h3>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </card>
        <card className="testis">
          <h2>
            Rating: <span>4.7</span>
          </h2>
          <div>
            <img className="test" src={t4} alt="person4" />
            <h3>Alexa</h3>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </card>
      </section>
    </div>
  );
};

export default Testimonials;
