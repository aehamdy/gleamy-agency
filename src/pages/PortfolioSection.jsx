import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";

function PortfolioSection() {
    return(
        <section className="relative flex flex-col gap-8 text-start mt-[7%] md:mt-[5%] lg:mt-[0%]">
            <SectionHeading text="Portfolio" />
            <Projects />
        </section>
    )
}

export default PortfolioSection;