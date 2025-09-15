// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { About } from "./components/about";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import { Features } from "./components/features"; // Ensure this import matches the updated export
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";
// import StatsSection from "./components/statsSection";
// import AboutUs from "./pages/AboutUs";
// import Home from "./pages/Home";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   // const [landingPageData, setLandingPageData] = useState({});
//   // useEffect(() => {
//   //   setLandingPageData(JsonData);
//   // }, [ ]);


//   

//   return (
//     <BrowserRouter>
//       <>
//         <Navigation />
//         <Header data={landingPageData.Header} />
//         <StatsSection />
//         <Features data={landingPageData.Features} />
//         <About data={landingPageData.About} />
//         {/* <Services data={landingPageData.Services} /> */}
//         {/* <Gallery data={landingPageData.Gallery} /> */}
//         <Testimonials data={landingPageData.Testimonials} />
//         <Team data={landingPageData.Team} />
//         <Contact />


//             {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/butDid" element={<Contact />} />
//       </Routes>
//       </>
//     </ BrowserRouter>
//   );
// };

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BuyDid from "./pages/BuyDid";
import SellDid from "./pages/SellDid";
import Rates from "./pages/Rates";
import FeaturesPage from "./pages/FeaturesPage";
import Coverage from "./pages/Coverage";
import ContactPage from "./pages/ContactPage";

import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BuyerSellerInteropPage from "./pages/Introp";
import BuyerInterop from "./pages/BuyerInterop";
import Awards from "./pages/Awards";
import Events from "./pages/Events";
import Clec from "./pages/Clec";
import ToolFreeNumbers from "./pages/ToolFreeNumbers";
import CaseStudy from "./pages/CaseStudy";
import Lookup from "./pages/Lookup";
import Asterisk from "./components/Asterisk";
import VoipSwitch from "./pages/VoipSwitch";
import Elastix from "./pages/Elastix";
import Partners from "./pages/Partners";
import Mobile from "./pages/Mobile";
import ResetPassword from "./pages/ResetPassword";
import FAQ from "./pages/FAQ";
import { useEffect, useState } from "react";
import BonusPopup from "./components/modals/BonusPopup";
import Channel from "./pages/Channel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Layout wraps all pages
    children: [
      { index: true, element: <Home /> },           // default route "/"
      { path: "about", element: <AboutUs /> },
      { path: "buy-did", element: <BuyDid /> },
      { path: "sell-did", element: <SellDid /> },
      { path: "rates", element: <Rates /> },
      { path: "features", element: <FeaturesPage /> },
      { path: "coverage", element: <Coverage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "introp", element: <BuyerSellerInteropPage /> },
      { path: "login-page", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "buyer-interop", element: <BuyerInterop /> },
      { path: "awards", element: <Awards /> },
      { path: "partners", element: <Partners /> },
      { path: "events", element: <Events /> },
      { path: "clec", element: <Clec /> },
      { path: "toll-free-numbers", element: < ToolFreeNumbers /> },
      { path: "case-study", element: < CaseStudy /> },
      { path: "lnp-lookup", element: < Lookup /> },
      { path: "asterisk", element: < Asterisk /> },
      { path: "voip-switch", element: < VoipSwitch /> },
      { path: "elastix", element: < Elastix /> },
      { path: "mobile", element: < Mobile /> },
      { path: "channels", element: <Channel/> },
      { path: "reset-password", element: < ResetPassword /> },
      { path: "faq", element: < FAQ /> }

    ],
  },
]);

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, [])
  return <>
    <RouterProvider router={router} />
    {/* <BonusPopup open={open} handleClose={handleClose} /> */}
  </>;
}

