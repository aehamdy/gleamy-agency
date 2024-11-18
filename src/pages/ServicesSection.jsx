import OutlineText from "../components/OutlineText";
import SectionHeading from "../components/SectionHeading";
import Services from "../components/Services";

function ServicesSection() {
    return(
        <section className="relative flex flex-col gap-8 text-start mt-[25%] md:mt-[5%]">
            <SectionHeading text="Services" />
                <OutlineText text="S" />
            <div className="flex items-center z-[5]">
                <Services />
            </div>
        </section>
    )
}

export default ServicesSection;