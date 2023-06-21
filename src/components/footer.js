/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/style.css";
function Footer() {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="footer">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12 col-sm-12 col-xs-12">
              <div class="footer_menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div class="footer_copyright">
                <p>© 2023 Rades. All Rights Reserved.</p>
              </div>
              <div class="footer_profile">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
