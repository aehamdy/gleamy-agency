/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Logo from "./Logo";
import OutlineText from "./OutlineText";

function LoadingScreen({ isVisible, onComplete }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);

      const timeoutExpand = setTimeout(() => {
        setIsShrinking(true);
      }, 700); // Wait for the expand animation to complete

      const timeoutComplete = setTimeout(() => {
        setIsAnimating(false);
        setIsShrinking(false);
        onComplete();
      }, 1100); // Total duration of both animations

      return () => {
        clearTimeout(timeoutExpand);
        clearTimeout(timeoutComplete);
      };
    }
  }, [isVisible, onComplete]);

  return (
    <section
      className={`fixed grid place-items-center w-full start-0 transition-[height,top,bottom] duration-500 ${
        isAnimating
          ? isShrinking
            ? "h-0 top-0 bottom-auto" // Shrink to top
            : "h-full bottom-0 top-auto" // Expand upwards
          : "h-0 bottom-0 top-auto" // Reset to initial state
      } z-50 overflow-hidden`}
    >
      <div className="relative">
        <div className="absolute top-0 start-1/2 -translate-y-1/2 -translate-x-1/2">
          <OutlineText text="g" />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </section>
  );
}

export default LoadingScreen;
