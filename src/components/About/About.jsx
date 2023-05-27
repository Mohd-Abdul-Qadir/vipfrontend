import React from "react";
import Appbar from "../Header/Appbar";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Appbar />
      <div className="main-container">
        <h1>About Us</h1>
      </div>
      <div className="first-div">
        Vip Cutlery is a budding, dynamic company providing wide range of
        quality stainless steel hotel ware & kitchenware products. Whether it's
        about fine dine cutlery or tableware products, professional chef tools
        or buffet products, barware products or serving tongs-vip cutlerty is
        committed for providing client satisfaction & receiving positive
        feedback. Our working strategy has surely & steadily added to our
        nationwide coverage through an exciting range of kitchenware & tableware
        products, matched by an equally efficient customer service. Our efforts
        to go the extra mile have earned us an outstanding reputation amongst
        our clients.
      </div>

      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span> Quality</span>
            <span>
              We have robust in-house quality checks to ensure only the best
              quality products are delivered to clients.
            </span>
            <span>Manufacturing</span>
            <span>
              We have multiple units in Moradabad that have a capacity to
              produce 1,00,000 units everyday. We follow sustainable practices
              to ensure responsible manufacturing
            </span>
            <span>Buy Best</span>
            <span>
              Colors and shapes play a prominent role in brightening the
              tablescape. vip cutlery has a wide range of colors when it comes
              to cutlery sets. Gold cutlery, black cutlery, rose gold cutlery,
              silver cutlery, colorful cutlery, and cutlery with fruit prints on
              them, are a few of the many fascinating prints and designs we
              offer at vip cutlery
            </span>
          </div>
        </div>
        <div className="i-right">
          <img src="/img/cheif.jpg" alt="chef" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
