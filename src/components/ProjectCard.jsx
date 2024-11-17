/* eslint-disable react/prop-types */

function ProjectCard({ project }) {
return(
        <article className="group relative flex flex-col w-2/3 lg:w-1/3 min-w-[55%] lg:min-w-[33%] snap-start cursor-pointer">
            <div className="absolute z-[0] text-5xl text-[#363636] start-1/2 -translate-x-1/2">{project.underneathText}</div>
            <div className="flex flex-col gap-4 z-[1] items-center group-hover:translate-y-14 duration-500">
            <div className="max-w-full rounded-md"><img src={project.image} alt="project image" /></div>
            <h3 className="">{project.heading}</h3>
            <p className="relative text-center before:absolute before:w-2 before:h-2  before:top-1/2 before:-start-5 before:-translate-y-1/2 before:bg-accent before:rounded-full">{project.type}</p>
            </div>
        </article>
    )
}

export default ProjectCard;