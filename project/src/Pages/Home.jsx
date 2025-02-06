import { BenefitsSection } from "@/components/layout/benifits"
import { Footer1 } from "@/components/layout/footer"
import { Hero2 } from "@/components/layout/hero2"
import { SponsorsSection } from "@/components/layout/marquee"
import { Header1 } from "@/components/layout/ṇav2"

const Home = () => {
  return (
    <>

      <Header1 />
      <Hero2 />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <Footer1/>
    </>
  )
}

export default Home