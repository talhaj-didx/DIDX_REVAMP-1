import React from "react";
import { Header } from "../components/header";
import StatsSection from "../components/statsSection";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const Home = () => {
  const landingPageData = JsonData;


  return (
    <>
      <Header data={landingPageData.Header} />
      <StatsSection />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact />
    </>
  );
};

export default Home;
