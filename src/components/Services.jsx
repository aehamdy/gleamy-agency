import ServiceCard from "./ServiceCard";

function Services() {
    const servicesHeadings = ["Brand Identity", "Technology", "UI/UX Design"];

    return (
        <section className="flex gap-8 max-w-full py-4 overflow-x-scroll lg:overflow-x-hidden snap-x lg:snap-none">
            {servicesHeadings.map((heading, i) => (
                <ServiceCard key={i} headingText={heading} />
            ))}
        </section>
    );
}

export default Services;
