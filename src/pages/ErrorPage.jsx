import { Link, useNavigate } from "react-router-dom";
import OutlineText from "../components/OutlineText";
import { useEffect, useRef, useState } from "react";

const REDIRECT_COUNT = 10;
const COUNTDOWN_INTERVAL = 1000;
const HOME_LINK = "/";

function ErrorPage() {
    const [counter, setCounter] = useState(REDIRECT_COUNT);
    const intervalRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (counter === 0) {
            clearInterval(intervalRef.current);
            navigate(HOME_LINK)
        }
    });

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter(prevValue => prevValue - 1);
        }, COUNTDOWN_INTERVAL);

        return () => clearInterval(intervalRef.current);
    }, []);

    return(
        <div className="relative h-full content-center text-projectTextClamp text-neutral-300">
            <div className="absolute start-1/2 -translate-x-1/2 z-0">
                <OutlineText text="ERROR" />
            </div>
            <div className="relative space-y-4">
            <h3>Oops!</h3>
            <h4>Something went wrong...</h4>
            <p className="text-base text-neutral-400">Redirecting to Home Page in <span className="text-accent">{counter}</span> seconds.</p>
            <p className="text-lg">Or Click <Link to={HOME_LINK} className="text-accent underline">Home</Link> to go back.</p>
            </div>
        </div>
    )
}

export default ErrorPage;