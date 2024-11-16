import circularLogo from "../assets/circular-logo.png";

function SpinningLogo() {
    return (
        <div className="absolute flex items-center justify-center">
            <img src={circularLogo} alt="Circular Logo" className="w-28 h-28 animate-rotate-slow" />
        </div>
    );
}

export default SpinningLogo;
