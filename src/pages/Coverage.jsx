import AnimatedTable from '../components/animatedTable'
import HeroSection from '../components/heroSection'
import { Contact } from '../components/contact'


const Coverage = () => {
  

  return (
    <div>
      <HeroSection
        titleA={"Global DID Coverage In 100+ Countries"}
        description={
          "DIDx is the world's No.1 Direct Inward Dialing numbering (DID Numbers) provider since 2005. It's an exchange where buyers and sellers meet to trade in DID numbers. We currently have over 100+ countries as part of our coverage. If You need DID Number from a country which you do not see here, Please CONTACT US with your target price and quantity."
        }
        img={"/img/globe.png"}
      />
      <AnimatedTable />
      <Contact />
    </div>
  )
}

export default Coverage
