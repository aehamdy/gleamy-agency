import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <div className="h-full content-center text-projectTextClamp text-neutral-300">
            <div className="space-y-4">
            <h3>Oops!</h3>
            <h4>Something went wrong...</h4>
            <p>Click <Link to="/" className="text-accent underline">Home</Link> to go back</p>
            </div>
        </div>
    )
}

export default ErrorPage;