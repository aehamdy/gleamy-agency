/* eslint-disable react/prop-types */
import Logo from "./Logo";
import OutlineText from "./OutlineText";

function LoadingScreen() {


    return(
        <section className={`absolute grid place-items-center w-full h-full start-0 top-0`}>
            <div className="relative">
                <div className="absolute h-fit top-[0] start-1/2 -translate-y-1/2 -translate-x-1/2">
                    <OutlineText text="g" />
                </div>
                <div>
                    <Logo />
                </div>
            </div>
        </section>
    )
}

export default LoadingScreen;