/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/style.css";
function Home() {
  return (
    <>
      <section className="candidates-profile-bg">
        <section id="tasty-desserts">
          <div className="container-fluid">
            <div className="row" id="dessert" data-aos="zoom-in-up">
              <div className="col-md-12 col-xs-12">
                <p className="tasty-title"> Tasty Food </p>
                <p className="tasty-desc">
                  {" "}
                  Whether you crave sweet, savory, decadent or healthy,
                  <br />
                  we have hundreds of top-rated dessert recipes to satisfy your
                  taste buds.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xs-12 intro-about">
              <div>
                <p className="about font-bold">ABOUT</p>
                <p className="desc" data-aos="slide-up">
                  Our Chefs offer you perfect cooking, best served dishes with
                  fresh ingredients and old recipes. We have only carefully
                  sourced and seasonal ingredients in our disposal to make
                  rustic dishes. We provide you with daily self-made bread,
                  sourdough pizza, roasted fish-meat-vegetables and many more.
                </p>
                <p>
                  <button
                    type="button"
                    id="read-more"
                    data-aos="zoom-in-up"
                    className="font-bold"
                  >
                    READ MORE
                  </button>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-xs-12"
              id="img-contain"
              data-aos="zoom-out-right"
            ></div>
          </div>
        </div>
      </section>
      <section className="todays-speciality">
        <div class="container-fluid">
          <div className="row" id="today" data-aos="zoom-in-right">
            <div className="col-md-12 col-xs-12">
              <p className="today-title"> Today's Speciality </p>
              <p className="today-brief">
                {" "}
                Chicken with vegetables: mashed potatoes, bean pods, croutons,
                cranberry jam,rosemary{" "}
              </p>
              <p>
                {" "}
                <button type="button" id="menu-btn">
                  {" "}
                  7 day's menu{" "}
                </button>{" "}
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
