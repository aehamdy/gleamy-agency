import HeroHeading from "../components/HeroHeading";
import MarqueeBar from "../components/MarqueeBar";

function LandingPage() {

  return (
    <section className="relative flex flex-col gap-8 text-start mt-[25%] md:mt-[5%]">
      <HeroHeading />
      {/* <MarqueeBar variant="text-black bg-white rotate-[50deg] md:rotate-[45deg] top-0 end-0 -translate-x-[9rem] md:-translate-x-[25rem]" /> */}
      {/* <MarqueeBar variant="text-white bg-[#212121] -rotate-[30deg] md:-rotate-[25deg] lg:-rotate-[15deg] -bottom-[12rem] md:-bottom-[8rem] lg:-bottom-[5rem] end-0 " /> */}
      <MarqueeBar variant="text-[#212121] bg-white rotate-[44deg] md:rotate-[43deg] lg:rotate-[47deg]" position="bottom-[-35rem] md:bottom-[-12rem] lg:bottom-[12rem] start-[-55rem] md:start-[-55rem] lg:start-[0] lg:end-[-42rem]" />
      <MarqueeBar variant="text-white bg-[#212121] rotate-[-13deg] md:rotate-[-21deg] lg:rotate-[-10deg]" position="bottom-[12rem] md:bottom-[20rem] lg:bottom-[6rem] -start-[8rem] md:-start-[18rem]" />
    </section>
)
}

export default LandingPage;