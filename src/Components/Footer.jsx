import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
        <br /><br />
      <hr /><div classNameName="container my-5">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
      
                    &nbsp;Ecommerce-SocialPrachar
                  </h6>
                  <p>
                    We see our customers as invited guests to a party, and we
                    are the hosts. It’s our job every day to make every
                    important aspect of the customer experience a little bit
                    better.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2  mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Categories
                  </h6>
                  <p>
                    <a className="text-white">Men's Clothing</a>
                  </p>
                  <p>
                    <a className="text-white">Women's Clothing</a>
                  </p>
                  <p>
                    <a className="text-white">Jewellery</a>
                  </p>
                  <p>
                    <a className="text-white">Technology</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"> New York, NY 10012, US</i>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3">info@gmail.com</i>
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3">+ 01 234 567 88</i>
                  </p>
                  <p>
                    <i className="fas fa-print mr-3">+ 01 234 567 89</i>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  {/* <!-- Facebook --> */}
                  <a
                    className="btn btn-primary facebook btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <BsFacebook />
                  </a>

                  {/* <!-- Twitter --> */}
                  <a
                    className="btn btn-primary twitter btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <AiOutlineTwitter />
                  </a>

                  {/* <!-- Google --> */}
                  <a
                    className="btn btn-primary google btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <FcGoogle />
                  </a>

                  {/* <!-- Instagram --> */}
                  <a
                    className="btn btn-primary instagram btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <BsInstagram />
                  </a>

                  <a
                    className="btn btn-primary linkedin btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    className="btn btn-primary github btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </section>
          </div><hr />
          <div className="text-center p-3">
            Copyright: © 2024
            <a className="text-white">Ecommerce.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
