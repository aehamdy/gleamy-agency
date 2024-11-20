/* eslint-disable react/prop-types */

function OutlineText({ text }) {
    return(
        <h2 className={`absolute ${text === "ERROR" ? 'text-[5.5rem] md:text-[6.5rem] lg:text-[8rem]' : 'text-[300px]'} font-bold start-1/2 top-[50%] -translate-y-1/2 -translate-x-1/2 z-0 select-none`}
        style={{WebkitTextStroke: "3px #404040", WebkitTextFillColor: 'transparent'}}>{text}</h2>
    )
}

export default OutlineText;