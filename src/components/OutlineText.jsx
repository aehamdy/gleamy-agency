/* eslint-disable react/prop-types */

function OutlineText({ text }) {
    return(
        <h2 className="absolute text-[300px] font-bold start-1/2 top-[60%] -translate-y-1/2 -translate-x-1/2 z-0"
        style={{WebkitTextStroke: "3px #404040", WebkitTextFillColor: 'transparent'}}>{text}</h2>
    )
}

export default OutlineText;