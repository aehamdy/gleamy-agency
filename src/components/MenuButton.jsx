/* eslint-disable react/prop-types */

function MenuButton({ text, handleNavVisibility }) {

    const handleButtonClick = () => {
        handleNavVisibility()
    }

    return(
        <button type="button" onClick={handleButtonClick} className="group flex flex-wrap items-center gap-3">
            <div className="hidden md:block w-[50px] uppercase">{text}</div>
            <div className="flex flex-col gap-1.5 w-7">
                <span className={`w-full h-1 bg-white ${text === "Close" && 'rotate-45'} duration-short`}></span>
                <span className={`${text === "Close" ? 'w-full -rotate-45 -translate-y-2.5' : 'w-1/2'} h-1 bg-white duration-short`}></span>
            </div>
        </button>
    )
}

export default MenuButton;