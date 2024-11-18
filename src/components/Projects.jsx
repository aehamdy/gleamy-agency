import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            underneathText: "Gleamy",
            image: project1,
            heading: "Gleamy Portfolio",
            type: "UI/UX",
        },
        {
            underneathText: "Dashboard",
            image: project2,
            heading: "NFTs Dashboard",
            type: "UI/UX",
        },
        {
            underneathText: "Showreel",
            image: project3,
            heading: "Gleamy Showreel",
            type: "UI/UX",
        },
    ];

    return (
        <section className="flex gap-4 overflow-x-scroll lg:overflow-x-hidden flex-nowrap mt-6 px-4 snap-x lg:justify-center">
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </section>
    );
}

export default Projects;