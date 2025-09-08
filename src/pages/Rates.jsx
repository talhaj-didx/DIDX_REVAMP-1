import React from 'react'
import DidxRatesSection from '../components/didxRatesSection'
import HeroSection from '../components/heroSection'
import JsonData from "../data/data.json";
import { Contact } from '../components/contact';
import GridCard from '../components/GridCard';

const Rates = () => {
  const landingPageData = JsonData;
  //  const dataS = [
  // {
  //   "icon": "fa-money",
  //   "title": "Basic Membership",
  //   "text": "Basic membership on DIDX is free. Member gets 2 free DIDs for 30 days to explore services. Accounts must be activated to buy/sell."
  // },
  // {
  //   "icon": "fa fa-database",
  //   "title": "Regular Membership",
  //   "text": "Zero setup charge · Zero monthly charge. Sellers do not pay listing or brokerage fees. A monthly minimum quantity charge of $50 applies when buyers do not have at least 50 purchased numbers OR domestic USA sellers have at least 500 numbers OR international sellers have at least 50 numbers for sale on DIDX."
  // },
  //   {
  //   "icon": "fa fa-database",
  //   "title": "Listing Charges",
  //   "text": "There is NO CHARGE to list your numbers on DIDX to sell them. DIDX is for wholesale customers only. If you need fewer than 50 numbers please visit virtualphoneline.com."
  // },
  //  ]
  return (
    <div>
      <HeroSection
        titleA={"Rates & Memberships"}
        description={
          "Each DID on DIDX is priced by the Vendor/Seller of the DID. DIDX does not control seller rates. To view the DID rates, please log in to your account."
        }
        img={"/img/globe.png"}
      />

      {/* <GridCard props={{ data: dataS }} /> */}
      <DidxRatesSection />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default Rates
