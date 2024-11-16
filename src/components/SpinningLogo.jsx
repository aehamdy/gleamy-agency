import circularLogo from "../assets/circular-logo.png";

function SpinningLogo() {
    return (
        <div className="flex items-center justify-center w-fit">
            <img src={circularLogo} alt="Circular Logo" className="w-20 h-20 md:w-18 md:h-18 lg:w-20 lg:h-20 animate-rotate-slow" />
        </div>
    );
}

export default SpinningLogo;
