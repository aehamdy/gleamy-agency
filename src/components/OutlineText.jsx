/* eslint-disable react/prop-types */

function OutlineText({ text }) {
    return(
        <h2 className="text-[300px] font-bold"
        style={{WebkitTextStroke: "3px #404040", WebkitTextFillColor: 'transparent'}}>{text}</h2>
    )
}

export default OutlineText;