import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const REDIRECT_COUNT = 10000;
const COUNTDOWN_INTERVAL = 1000;
const HOME_LINK = "/";

function CountdownTimer() {
    const [counter, setCounter] = useState(REDIRECT_COUNT);
    const intervalRef = useRef();
    const navigate = useNavigate(HOME_LINK);

    useEffect(() => {
        if (counter === 0) {
            clearInterval(intervalRef.current);
            navigate(HOME_LINK)
        }
    }, [counter]);


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter(prevValue => prevValue - 1);
        }, COUNTDOWN_INTERVAL);

        return () => clearInterval(intervalRef.current);

    }, [])

    return <span className="text-accent">{counter}</span>
}

export default CountdownTimer;