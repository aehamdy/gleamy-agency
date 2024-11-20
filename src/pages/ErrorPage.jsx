import { Link } from "react-router-dom";
import OutlineText from "../components/OutlineText";
import CountdownTimer from "../components/CountdownTimer";

function ErrorPage() {

    return(
        <div className="relative h-full content-center text-projectTextClamp text-neutral-300">
            <div className="absolute start-1/2 -translate-x-1/2 z-0">
                <OutlineText text="ERROR" />
            </div>
            <div className="relative flex flex-col items-center space-y-4">
            <h3>Oops!</h3>
            <h4>Something went wrong...</h4>
            <p className="w-fit text-base text-neutral-400">Redirecting to Home Page in <CountdownTimer /></p>
            <p className="text-lg">Or Click <Link to="/" className="text-accent underline">Home</Link> to go back.</p>
            </div>
        </div>
    )
}

export default ErrorPage;