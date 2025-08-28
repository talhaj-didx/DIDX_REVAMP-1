import React from 'react'
import DidxRatesSection from '../components/didxRatesSection'
import HeroSection from '../components/heroSection'
import JsonData from "../data/data.json";
import { Contact } from '../components/contact';

const Rates = () => {
  const landingPageData = JsonData;
  return (
    <div>
      <HeroSection
        titleA={"Rates & Memberships"}
        description={
          "Each DID on DIDX is priced by the Vendor/Seller of the DID. DIDX does not control seller rates. To view the DID rates, please log in to your account."
        }
        img={"/img/globe.png"}
      />
      <DidxRatesSection />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default Rates
