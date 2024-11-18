import buttonImage from "../assets/watch-video.svg";

function WatchVideoButton() {
    return(
        <button type="button" className="absolute bottom-1 md:bottom-2 end-0 md:end-4 lg:end-8 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <img src={buttonImage} alt="Play Image" />
        </button>
    )
}

export default WatchVideoButton;