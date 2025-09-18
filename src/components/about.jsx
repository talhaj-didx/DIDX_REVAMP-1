import FeatureBoxes from "./featuresBoxes";
import JsonData from "../data/data.json";

export const About = () => {
  const {
    WhyChooseUs: {
      data: {
        title,
        data: { reasons },
      },
    },
  } = JsonData;

  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title || "Why Choose DIDX?"}</h2>
        </div>
        <>
          <FeatureBoxes features={reasons} />
        </>
      </div>
    </div>
  );
};
