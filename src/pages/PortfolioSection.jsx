import SectionHeading from "../components/SectionHeading";
import Projects from "../components/Projects";
import OutlineText from "../components/OutlineText";

function PortfolioSection() {
    return(
        <section>
            <SectionHeading text="Portfolio" />
            <Projects />
            <OutlineText text="THE CR8TIVE" />
        </section>
    )
}

export default PortfolioSection;