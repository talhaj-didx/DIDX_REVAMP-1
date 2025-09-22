import { Header } from "../components/header";
import StatsSection from "../components/statsSection";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import { useApi } from "../hooks/useApi";
import { getMultipleSections } from "../services/dataServices";
import BonusPopup from "../components/modals/BonusPopup";
import { useEffect, useState } from "react";

function getSection(response, key) {
  return response?.[key] || [];
}

const Home = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, isLoading } = useApi({ queryKey: "multipleSections", queryFn: getMultipleSections });
  const heroData = getSection(data, "hero");
  const featuresData = getSection(data, "features");
  const featuresVideos = getSection(data, "videos");
  const testimonialsData = getSection(data, "testimonials");
  const teamsData = getSection(data, "our_team");

  useEffect(() => {
    handleOpen();
  }, [])

  return (
    <>
      <Header data={heroData} isLoading={isLoading} />
      <StatsSection />
      <Features
        data={featuresData}
        featuresVideos={featuresVideos}
      />
      <About />
      <Testimonials data={testimonialsData} />
      <Team data={teamsData} />
      <Contact />
      <BonusPopup open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
