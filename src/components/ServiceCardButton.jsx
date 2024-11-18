function ServiceCardButton() {
    return <button type="button"
    className="relative w-fit p-2 text-paragraph-color 
    hover:text-white before:absolute before:w-7 before:h-3 
    hover:before:w-full hover:before:h-full before:bg-accent before:top-1/2 
    before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
    before:skew-x-6 before:skew-y-[-20deg] hover:before:skew-x-0 hover:before:skew-y-0 before:z-[-1] 
    z-[1] before:duration-short before:transition-all duration-short">
        Know More
        </button>
}

export default ServiceCardButton;