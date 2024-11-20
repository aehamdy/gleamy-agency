import { Link } from "react-router-dom";
import OutlineText from "../components/OutlineText";

function ErrorPage() {
    return(
        <div className="relative h-full content-center text-projectTextClamp text-neutral-300">
            <div className="absolute start-1/2 -translate-x-1/2 z-0">
                <OutlineText text="ERROR" />
            </div>
            <div className="relative space-y-4">
            <h3>Oops!</h3>
            <h4>Something went wrong...</h4>
            <p>Click <Link to="/" className="text-accent underline">Home</Link> to go back</p>
            </div>
        </div>
    )
}

export default ErrorPage;