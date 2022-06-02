import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function About() {
  return (
    <>
      <div id="about_con">
        <Nav />
        <div id="about_detail_con">
          <div className="rare_data_con">
            <p className="rare_header">ABOUT COOK ME </p>

            <div className="rare_con">
              <p className="rare_con_header">What Am I?</p>
              <p className="rare_con_caption">
                {
                  "I'm an ultra-simple and stylish app that only aims to design a platform for a limited number of cooking recipes. Also, I'm made just to practice and increase constructive skills :( ."
                }
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">What Am I Not?</p>
              <p className="rare_con_caption">
                {
                  "First of all, I'm not everything, nor am I a perfectionist app, I'm just a small app, and my goal is to grow (of course, if my developer looks at it later :) ) ."
                }
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">My Service</p>
              <p className="rare_con_caption">
                I can show recipes in 14 different categories. My information
                includes the ingredients of the food and how to cook it.
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">My Goals</p>
              <p className="rare_con_caption">
                {
                  "As an app, I also have a series of goals for my future. For example, I would like to connect to a stronger database and API. Maybe in the future I want different sections like articles and even a section to register and create a platform to communicate with people so that they can share their own food and cooking recipes.Tell my developer to achieve my dream before my life is over :) ."
                }
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
