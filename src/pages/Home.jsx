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
      <Header/>
      <StatsSection />
      <Features/>
      <About/>
      <Testimonials/>
      <Team data={landingPageData.Team} />
      <Contact />
    </>
  );
};

export default Home;
