import { Header } from "../components/header";
import StatsSection from "../components/statsSection";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import { useApi } from "../hooks/useApi";
import { getMultipleSections } from "../services/dataServices";

function getSection(response, key) {
  return response?.[key] || [];
}

const Home = () => {

  const { data } = useApi({ queryKey: "multipleSections", queryFn: getMultipleSections });
  const heroData = getSection(data, "hero");
  const featuresData = getSection(data, "features");
  const featuresVideos = getSection(data, "videos");
  const testimonialsData = getSection(data, "testimonials");
  const teamsData = getSection(data, "our_team");

  return (
    <>
      <Header data={heroData} />
      <StatsSection />
      <Features
        data={featuresData}
        featuresVideos={featuresVideos}
      />
      <About />
      <Testimonials data={testimonialsData} />
      <Team data={teamsData} />
      <Contact />
    </>
  );
};

export default Home;
