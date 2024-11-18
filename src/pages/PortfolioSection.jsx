import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";

function PortfolioSection() {
    return(
        <section className="relative flex flex-col gap-8 text-start mt-[17%] md:mt-[5%]">
            <SectionHeading text="Portfolio" />
            <Projects />
        </section>
    )
}

export default PortfolioSection;