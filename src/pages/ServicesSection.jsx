import OutlineText from "../components/OutlineText";
import SectionHeading from "../components/SectionHeading";
import Services from "../components/Services";

function ServicesSection() {
    return(
        <section>
            <SectionHeading text="Services" />
            <div className="flex items-center">
                <OutlineText text="S" />
                <Services />
            </div>
            <OutlineText text="THE CR8TIVE" />
        </section>
    )
}

export default ServicesSection;