import SectionHeading from "../components/SectionHeading";
import AboutUsHeading from "../components/AboutUsHeading";
import AboutUsContent from "../components/AboutUsContent";
import OutlineText from "../components/OutlineText";

function AboutUs() {
    return(
        <section>
            <SectionHeading text="About Us"/>
            <div className="flex items-center">
                <div>
                    <OutlineText text="A" />
                </div>
                <div>
                <AboutUsHeading />
                <AboutUsContent />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;