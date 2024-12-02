/* eslint-disable react/prop-types */
function ProjectCard({ project }) {
    return (
        <article className="group relative flex flex-col w-1/2 lg:w-1/3 min-w-[95%] md:min-w-[66.66%] lg:min-w-[33.33%] snap-start rounded-md overflow-hidden cursor-pointer">
            <div className="absolute z-[0] text-projectTextClamp text-[#363636] start-1/2 -translate-x-1/2">
                {project.underneathText}
            </div>
            <div className="flex flex-col gap-4 z-[1] items-center group-hover:translate-y-[3.75rem] duration-500">
                <div className="relative w-full h-64 rounded-md overflow-hidden">
                    <img
                        src={project.image}
                        alt="project"
                        className="absolute inset-0 w-full h-full object-cover object-left"
                    />
                </div>
                <h3>{project.heading}</h3>
                <p className="relative text-center before:absolute before:w-2 before:h-2 before:top-1/2 before:-start-5 before:-translate-y-1/2 before:bg-accent before:rounded-full">
                    {project.type}
                </p>
            </div>
        </article>
    );
}

export default ProjectCard;
