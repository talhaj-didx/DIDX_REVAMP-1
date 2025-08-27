import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaSkype } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-10"
      style={{
        background: "linear-gradient(135deg, #06A9CA, #011053)",
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <img src="img/logo.png" alt="DIDX Logo" className="mb-4 w-28" />
          <p className="text-sm leading-relaxed">
            DIDX, incorporated in Delaware since 2005, has been providing innovative telecom solutions.
          </p>
          <p className="mt-3 text-sm">
            <strong>Address:</strong> <br />
            1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
          </p>
          <p className="mt-2 text-sm">
            <strong>Email:</strong> sales@didx.net
          </p>
        </div>

        {/* Sellers & Buyers */}
        <div>
          <h3 className="font-semibold text-lg mb-4">DIDX for Sellers and Buyers</h3>
          <ul className="space-y-2 text-sm">
            {["CLECs Sell Numbers", "Toll Free Numbers", "Case Study", "Testimonial", "Coverage Area", "LNP Lookup"].map(
              (item, i) => (
                <li key={i} className="flex items-center">
                  <FaArrowRight style={{ color: "#04AACA", fontSize: "14px" }} />
                  <span className="ml-2">{item}</span>
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/YouTube_icon_%282013-2017%29.png"
              alt="Training"
              className="w-10 h-10 mr-2"
            />
            <span className="text-sm">Training Videos <br /> Click Here</span>
          </div>
        </div>

        {/* Sample Configuration */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sample Configuration</h3>
          <ul className="space-y-2 text-sm">
            {["Asterisk", "VOIP Switch", "Elastix"].map((item, i) => (
              <li key={i} className="flex items-center">
                <FaArrowRight style={{ color: "#04AACA", fontSize: "14px" }} />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/BBB_logo.png" alt="BBB" className="w-28" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Iso_9001-2008.svg"
              alt="ISO"
              className="w-28"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe To Our Newsletter</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email*"
              className="px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Join List
            </button>
          </form>
          <div className="mt-4 space-y-3">
            <div className="flex items-center">
              <FaPhoneAlt className="text-yellow-400 mr-2" />
              <span>Call us on Skype</span>
            </div>
            <div className="flex items-center">
              <FaSkype className="text-yellow-400 mr-2" />
              <span>Chat with us on Skype</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-500 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-6">
        <p>DIDX, incorporated in Delaware since 2005. © 2025 DIDX, Inc.</p>
        <p>
          <a href="#" className="hover:underline">Terms of Services</a> |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="hover:underline">User Policy</a> |{" "}
          <a href="#" className="hover:underline">API</a>
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
          <FaYoutube className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
