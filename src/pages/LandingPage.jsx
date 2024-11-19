import HeroHeading from "../components/HeroHeading";
import MarqueeBar from "../components/MarqueeBar";

function LandingPage() {

  return (
    <section className="relative flex flex-col gap-8 text-start mt-[25%] md:mt-[5%]">
      <HeroHeading />
      <MarqueeBar variant="text-black bg-white rotate-[50deg] md:rotate-[50deg] top-0 end-0 -translate-x-[9rem] md:-translate-x-[25rem]" />
      <MarqueeBar variant="text-white bg-[#212121] -rotate-[30deg] md:-rotate-[25deg] lg:-rotate-[15deg] -bottom-[12rem] md:-bottom-[8rem] lg:-bottom-[5rem] end-0 " />
    </section>
)
}

export default LandingPage;