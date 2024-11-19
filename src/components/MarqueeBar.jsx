/* eslint-disable react/prop-types */
function MarqueeBar({ variant}) {
    const content = [
      'creative design',
      'ui/ux',
      'marketing',
      'motion',
      'animation',
      'branding',
    ];
  
    return (
      <div
        className={`absolute left-0 -translate-y-1/2 -translate-x-[50vw] w-[200vw] py-3 font-roboto text-center ${variant} z-0 overflow-hidden pointer-events-none`}
      >
        <div className="flex space-x-8 w-[120vw] animate-marquee ">
          {Array(4)
            .fill(content)
            .flat()
            .map((item, index) => (
              <p
                key={index}
                className="relative before:absolute before:w-4 before:h-4 before:bg-accent before:rounded-full before:top-[50%] before:translate-y-[-50%] before:-start-6 px-8 whitespace-nowrap text-3xl uppercase"
              >
                {item}
              </p>
            ))}
        </div>
      </div>
    );
  }
  
  export default MarqueeBar;
  