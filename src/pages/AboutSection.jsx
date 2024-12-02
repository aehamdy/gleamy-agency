import SectionHeading from "../components/SectionHeading";
import AboutUsHeading from "../components/AboutUsHeading";
import AboutUsContent from "../components/AboutUsContent";
import OutlineText from "../components/OutlineText";
import Button from "../components/Button";

function AboutSection() {
    return(
        <section className="flex flex-col gap-8 text-start mt-spacing-sm md:mt-spacing-md lg:mt-spacing-lg">
            <SectionHeading text="About Us"/>
            <div className="flex items-center">
                <div>
                    <OutlineText text="A" />
                </div>
                <div className="z-[5]">
                <AboutUsHeading />
                <AboutUsContent />
                <Button text="Contact us" />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;