import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";

function PortfolioSection() {
    return(
        <section className="relative flex flex-col gap-8 text-start mt-spacing-sm md:mt-spacing-md lg:mt-spacing-lg">
            <SectionHeading text="Portfolio" />
            <Projects />
        </section>
    )
}

export default PortfolioSection;