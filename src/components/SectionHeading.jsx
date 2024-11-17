/* eslint-disable react/prop-types */

function SectionHeading({ text }) {
    return <h2 className="relative w-fit text-sectionHeadingClamp text-white before:absolute before:w-[50px] before:h-[3px] before:bottom-0 before:start-1 before:bg-neutral-700 uppercase">{text}</h2>
}

export default SectionHeading;