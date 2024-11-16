/* eslint-disable react/prop-types */

function OneLetter({letter}) {
    return(
        <h1 className="text-[300px] font-bold"
        style={{WebkitTextStroke: "3px #404040", WebkitTextFillColor: 'transparent'}}>{letter}</h1>
    )
}

export default OneLetter;