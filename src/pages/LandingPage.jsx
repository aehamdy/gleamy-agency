import HeroHeading from "../components/HeroHeading";
import MarqueeBar from "../components/MarqueeBar";

function LandingPage() {

  return (
    <section className="relative flex flex-col gap-8 text-start mt-[25%] md:mt-[5%]">
      <HeroHeading />
      {/* <MarqueeBar variant="text-black bg-white rotate-[50deg] md:rotate-[45deg] top-0 end-0 -translate-x-[9rem] md:-translate-x-[25rem]" /> */}
      {/* <MarqueeBar variant="text-white bg-[#212121] -rotate-[30deg] md:-rotate-[25deg] lg:-rotate-[15deg] -bottom-[12rem] md:-bottom-[8rem] lg:-bottom-[5rem] end-0 " /> */}
      <MarqueeBar variant="text-white bg-[#212121] rotate-[-10deg] md:-rotate-[21deg] lg:-rotate-[15deg]" position="bottom-[5rem] md:bottom-[24rem] lg:bottom-[18rem] -start-[8rem] md:-start-[18rem]" />
      <MarqueeBar variant="text-black bg-white rotate-[-10deg] md:-rotate-[21deg] lg:rotate-[-25deg]" position="bottom-[5rem] md:bottom-[24rem] lg:bottom-[18rem] -start-[8rem] md:end-[18rem]" />
    </section>
)
}

export default LandingPage;