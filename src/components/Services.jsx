import ServiceCard from "./ServiceCard";

function Services() {

    const servicesHeadings = ["Brand Identity", "Technology", "UI/UX Design"];

    return (
        <section className="flex gap-8">
        {servicesHeadings.map((heading, i) => (
            <ServiceCard key={i} headingText={heading} />
        ))}
        </section>
    )
}

export default Services;