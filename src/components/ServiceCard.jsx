/* eslint-disable react/prop-types */
import ServiceCardButton from "./ServiceCardButton";

function ServiceCard({ headingText }) {
    return (
        <article className="flex flex-col gap-8 w-2/3 lg:w-1/3 min-w-[66%] lg:min-w-[33%] text-start snap-start">
            <div className="flex flex-col gap-4">
                <h3 className="text-white text-2xl">{headingText}</h3>
                <p className="text-paragraph-color leading-7">
                    Bringing the history of your brand to the forefront gives an emotional
                    dimension to your visual identity, which is essential today more than ever
                    in today's digital landscape.
                </p>
            </div>
            <ServiceCardButton />
        </article>
    );
}

export default ServiceCard;
