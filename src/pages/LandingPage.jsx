import HeroHeading from "../components/HeroHeading";
import MarqueeBar from "../components/MarqueeBar";

function LandingPage() {

  return (
    <section className="relative flex flex-col gap-8 text-start mt-[25%] md:mt-[5%]">
      <HeroHeading />
      <MarqueeBar variant="text-white bg-[#212121] rotate-[45deg] bottom-0 end-0 -translate-x-[14rem]" />
      <MarqueeBar variant="text-black bg-white -rotate-[20deg] -bottom-[8rem] end-0 " />
    </section>
)
}

export default LandingPage;