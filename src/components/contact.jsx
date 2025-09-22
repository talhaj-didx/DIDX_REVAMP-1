// import { useState } from "react";
// import emailjs from "emailjs-com";
// import React from "react";
// import { Link } from "react-router-dom";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);

//     // replace below with your own Service ID, Template ID and Public Key from your EmailJS account
//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
//       .then(
//         (result) => {
//           console.log(result.text);
//           clearState();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="row">
//             {/* ✅ Left side form */}
//             <div className="col-md-6">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us an email and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" validate onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* ✅ Right side content */}
//             <div className="col-md-6 contact-extra">
//               <div className="row">
//                 {/* Contact Info */}
//                 <div className="col-sm-4 contact-info">
//                   <div className="contact-item">
//                     <h4>Contact Info</h4>
//                     <p>
//                       <span>
//                         <i className="fa fa-map-marker"></i> Address
//                       </span>
//                       {props.data ? props.data.address : "loading"}
//                     </p>
//                     <p>
//                       <span>
//                         <i className="fa fa-phone"></i> Phone
//                       </span>{" "}
//                       {props.data ? props.data.phone : "loading"}
//                     </p>
//                     <p>
//                       <span>
//                         <i className="fa fa-envelope-o"></i> Email
//                       </span>{" "}
//                       {props.data ? props.data.email : "loading"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* DIDX for Sellers and Buyers */}
//                 <div className="col-sm-4">
//                   <div className="contact-item">
//                     <h4>DIDX for Sellers and Buyers</h4>
//                     <ul>
//                       <li>
//                         <Link to="/clec">📂 CLECs Sell Numbers</Link>
//                       </li>
//                       <li>
//                         <Link to="/toll-free-numbers">📂 Toll Free Numbers</Link>
//                       </li>
//                       <li>
//                         <Link to="/case-study">📂 Case Study</Link>
//                       </li>
//                       <li>
//                         <Link to="/testimonial">📂 Testimonial</Link>
//                       </li>
//                       <li>
//                         <Link to="/coverage">📂 Coverage Area</Link>
//                       </li>
//                       <li>
//                         <Link to="/lnp-lookup">📂 LNP Lookup</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Sample Configuration */}
//                 <div className="col-sm-4">
//                   <div className="contact-item">
//                     <h4>Sample Configuration</h4>
//                     <ul>
//                       <li>
//                         <Link to="/asterisk">⚙️ Asterisk</Link>
//                       </li>
//                       <li>
//                         <Link to="/voip-switch">⚙️ VOIP Switch</Link>
//                       </li>
//                       <li>
//                         <Link to="/elastix">⚙️ Elastix</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ✅ Social icons row */}
//           <div className="row">
//             <div className="col-md-12">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div id="footer">
//         <div className="container text-center">
//           <p>
//             &copy; DIDX, incorporated in Delaware since 2005. © 2025 DIDX, Inc.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import {
  FaHandPointRight,
  FaPhone,
  FaCommentDots,
  FaRss,
  FaEnvelope,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,

} from "react-icons/fa";

export const Contact = () => {
  const footerRef = useRef(null);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background:"#101516ff"
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 4, lg: 10 },
          px: { xs: 2, lg: 12, xl: 28 },
          py: 6,
        }}
      >
        {/* Logo & About */}
        <Box className="fade-in" sx={{ flex: 1, color: "rgba(255,255,255,0.8)" }}>
          <Box
            component="img"
            src="img/didx-logo-white.png"
            alt="DIDX Inc logo"
            sx={{ width: { xs: 126, lg: 156 }, mb: 2 }}
          />
          <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.25rem", fontFamily: "sans-serif"} , mt:3, ml:1 }}>
            DIDX, incorporated in Delaware since 2005, has been providing innovative
            telecom solutions.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              ml:1
            }}
          >
            <FaMapMarkerAlt style={{ marginTop: "4px" }} />
            <span>
              <strong>Address:</strong>
              <br />
              1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
            </span>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              ml:1
            }}
          >
            <FaEnvelope style={{ marginTop: "4px" }} />
            <span>
              <strong>Email:</strong>
              <br />
              sales@didx.net
            </span>
          </Typography>
          {/* <Typography sx={{ mt: 2, fontSize: { xs: "1.1rem", md: "1.25rem", fontFamily: "sans-serif" } }}>
            <strong>Address:</strong>
            <br />
            1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
          </Typography>
          <Typography sx={{ mt: 2, fontSize: { xs: "1.1rem", md: "1.25rem", fontFamily: "sans-serif" } }}>
            <strong>Email:</strong>
            <br />
            sales@didx.net
          </Typography> */}
        </Box>

        {/* Sellers & Buyers */}
        <Box className="fade-in" sx={{ flex: 1, color: "rgba(255,255,255,0.8)" }}>
          <Typography variant="h4" sx={{ color: "#fff", mb: 2, fontFamily: "sans-serif" }}>
            DIDX for Sellers and Buyers
          </Typography>
          {[
            ["CLECs Sell Numbers", "/clec"],
            ["Toll Free Numbers", "/toll-free-numbers"],
            ["Case Study", "/case-study"],
            // ["Testimonial", "/testimonial"],
            // ["Coverage Area", "/coverage"],
            ["LNP Lookup", "/lnp-lookup"],
            ["FAQ", "/faq"],
            ["Rates", "/rates"],
          ].map(([label, link], i) => (
            <Typography
              key={i}
              component="a"
              href={link}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                "&:hover": { color: "#9e9e9e" },
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontFamily: "sans-serif",
                padding: 1
              }}
            >
              <FaHandPointRight /> {label}
            </Typography>
          ))}
          <Divider sx={{ my: 3, bgcolor: "#292929", width: "80%" }} />
          <Box
            component="a"
            href="#"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <FaYoutube
              style={{
                fontSize: "3rem",
                background: "red",
                color: "#fff",
                padding: "6px",
                borderRadius: "6px",
              }}
            />
            <Typography variant="h6" sx={{ ml: 2, color: "rgba(255,255,255,0.8)" }}>
              Training Videos <br /> Click Here
            </Typography>
          </Box>
        </Box>

        {/* Sample Config */}
        <Box className="fade-in" sx={{ flex: 1, color: "rgba(255,255,255,0.8)" }}>
          <Typography variant="h4" sx={{ color: "#fff", mb: 2, fontFamily: "sans-serif" }}>
            Sample Configuration
          </Typography>
          {[
            ["Asterisk", "/asterisk"],
            ["VOIP Switch", "/voip-switch"],
            ["Elastix", "/elastix"],
          ].map(([label, link], i) => (
            <Typography
              key={i}
              component="a"
              href={link}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                "&:hover": { color: "#9e9e9e" },
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                padding: 1,
                fontFamily: "sans-serif"
              }}
            >
              <FaHandPointRight /> {label}
            </Typography>
          ))}
          <Divider sx={{ my: 3, bgcolor: "#292929", width: "80%" }} />
          {/* Images stacked in column */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              component="img"
              src="img/business-certificate.png"
              alt="Business Certificate"
              sx={{ width: "100%", maxWidth: 150 }}
            />
            <Box
              component="img"
              src="img/iso-certificate.png"
              alt="ISO 9001:2008"
              sx={{ width: "100%", maxWidth: 150 }}
            />
          </Box>
        </Box>

        {/* Newsletter */}
        <Box className="fade-in" sx={{ flex: 1, color: "rgba(255,255,255,0.8)" }}>
          <Typography variant="h4" sx={{ color: "#fff", mb: 2, fontFamily: "sans-serif" }}>
            Subscribe To Our Newsletter
          </Typography>
          {/* <TextField
            variant="outlined"
            size="small"
            placeholder="Email*"
            sx={{
              bgcolor: "#424242",
              input: { color: "#fff" },
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#fff" },
              },
            }}
          />
          <Button variant="contained" color="primary" sx={{marginLeft:2}}>
            Join List
          </Button> */}
          {/* Input + Button stacked */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email*"
              sx={{
                bgcolor: "rgba(255,255,255,0.8)",
                input: { color: "#424242" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  width: "100%",
                  maxWidth: 800,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ width: 100, height: 30 }} // Adjust width as needed
            >
              Join List
            </Button>
          </Box>

          <Divider sx={{ my: 3, bgcolor: "#292929", width: '100%' }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component="a" href="callto:salesdidx" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <FaPhone style={{ fontSize: "3rem", background: "#00AFF0", color: "#fff", padding: "6px", borderRadius: "6px" }} />
              <Typography variant="h6" sx={{ ml: 2, color: "rgba(255,255,255,0.8)" }}>
                Call us <br /> on Skype
              </Typography>
            </Box>
            <Box component="a" href="callto:salesdidx?chat" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <FaCommentDots style={{ fontSize: "3rem", background: "#00AFF0", color: "#fff", padding: "6px", borderRadius: "6px" }} />
              <Typography variant="h6" sx={{ ml: 2, color: "rgba(255,255,255,0.8)" }}>
                Chat with us <br /> on Skype
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(90deg, #0a4a75ff 0%, rgba(29, 34, 36, 1) 80%)",
          color: "rgba(255,255,255,0.8)",
          px: { xs: 2, lg: 12, xl: 28 },
          py: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body1">
          DIDX, incorporated in Delaware since 2005. © {new Date().getFullYear()} DIDX, Inc.
          <br />
          <Typography component="span" variant="body1">
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Services
            </a>{" "}
            |{" "}
            <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/use-policy" style={{ color: "inherit", textDecoration: "none" }}>
              Use Policy
            </a>{" "}
            |{" "}
            <a href="https://kb.didx.net/list-of-api-functions/" style={{ color: "inherit", textDecoration: "none" }}>
              API
            </a>
          </Typography>
        </Typography>
        <Box sx={{ display: "flex", gap: 3, fontSize: "1.2rem" , }}>
          <a href="https://www.facebook.com/DIDxGlobal"  target="_blank" rel="noreferrer">
            <FaFacebookF color="#1877F2" />
          </a>
          <a href="https://twitter.com/didxglobal" target="_blank" rel="noreferrer">
            <FaTwitter color="#1DA1F2" />
          </a>
          <a href="https://www.linkedin.com/company/didx" target="_blank" rel="noreferrer">
            <FaLinkedinIn color="#0A66C2" />
          </a>
          <a href="https://www.youtube.com/user/didexchange" target="_blank" rel="noreferrer">
            <FaYoutube color="#FF0000" />
          </a>
          <a href="mailto:care@didx.net">
            <FaEnvelope color="#D44638"/>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

