/* eslint-disable react/prop-types */

function Button({ text }) {
    return (
        <button
            type="button"
            className="relative w-fit py-2 px-1 text-paragraph-color hover:text-white 
                       before:absolute before:top-1/2 before:left-1/2 
                       before:-translate-x-1/2 before:-translate-y-1/2 
                       before:w-7 before:h-3 before:bg-accent 
                       before:skew-x-6 before:skew-y-[-20deg] 
                       before:z-[-1] z-[1] hover:before:w-full hover:before:h-full hover:before:skew-x-0 hover:before:skew-y-0 before:duration-short before:transition-all duration-short"
        >
            {text}
        </button>
    );
}

export default Button;
