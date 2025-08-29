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


//   const landingPageData = JsonData;

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
//         <Contact data={landingPageData.Contact} />


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
      { path: "login-page", element: <Login /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

