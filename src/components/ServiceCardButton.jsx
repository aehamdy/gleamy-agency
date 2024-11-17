function ServiceCardButton() {
    return <button type="button"
    className="relative w-fit text-paragraph-color hover:text-white 
    hover:before:absolute before:w-0 before:h-3 
    hover:before:w-7 before:bg-accent before:top-1/2 
    before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
    before:skew-x-6 before:skew-y-[-20deg] before:z-[-1] 
    z-[1] before:duration-short before:transition-all duration-short">
        Know More
        </button>
}

export default ServiceCardButton;