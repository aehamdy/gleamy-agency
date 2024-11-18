/* eslint-disable react/prop-types */

function OutlineText({ text }) {
    return(
        <h1 className="text-[300px] font-bold"
        style={{WebkitTextStroke: "3px #404040", WebkitTextFillColor: 'transparent'}}>{text}</h1>
    )
}

export default OutlineText;