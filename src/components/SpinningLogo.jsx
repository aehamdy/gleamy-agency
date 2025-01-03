import circularLogo from "../assets/circular-logo.png";

function SpinningLogo() {
    return (
        <div className="absolute top-[100px] start-0 md:start-6 lg:start-8 flex items-center justify-center w-fit z-10">
            <img src={circularLogo} alt="Circular Logo" className="w-20 h-20 md:w-18 md:h-18 lg:w-20 lg:h-20 animate-rotate-slow" />
        </div>
    );
}

export default SpinningLogo;
