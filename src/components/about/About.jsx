import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Btech Burger Wala</h4>
          <p>
            We are Btech Burger Wala. The place for most tasty and yummy burgers.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
            <div className='image'></div>
              <h3>Sarthak Singh</h3>
            </div>

            <p>
              I am Sarthak Singh, the founder of Btech Burger Wala. Affiliated to
              awesome Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
