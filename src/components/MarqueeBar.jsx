/* eslint-disable react/prop-types */
function MarqueeBar({ variant, position}) {
  const content = [
    'creative design',
    'ui/ux',
    'marketing',
    'motion',
    'graphic design',
    'animation',
    'branding',
  ];

  return (
    // <div
    //   className={`absolute left-0 -translate-y-1/2 -translate-x-[50vw] w-[200vw] py-3 font-roboto text-center ${variant} z-0 overflow-hidden pointer-events-none`}
    // >
    //   <div className="flex space-x-8 w-[120vw] animate-marquee ">
    //     {Array(4)
    //       .fill(content)
    //       .flat()
    //       .map((item, index) => (
    //         <p
    //           key={index}
    //           className="relative before:absolute before:w-4 before:h-4 before:bg-accent before:rounded-full before:top-[50%] before:translate-y-[-50%] before:-start-6 px-8 whitespace-nowrap text-3xl uppercase"
    //         >
    //           {item}
    //         </p>
    //       ))}
    //   </div>
    // </div>
    // <div className={`wrapper absolute left-0 -translate-y-1/2 -translate-x-[50vw] py-3 text-3xl uppercase tracking-wider font-roboto text-center z-0 pointer-events-none`}>
    <div className={`wrapper absolute py-3 text-3xl uppercase tracking-wider font-roboto text-center ${position}  pointer-events-none`}>
      <div className={`marquee-text overflow-clip  ${variant}`}>
        <div className="marquee-text-track relative flex gap-[4.8rem] w-max ps-[4.8rem] animate-marquee-move-text">
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">creative designs</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">ui/ux</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">marketing</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">motion</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">graphic design</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">branding</p>
        <p className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">animation</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">creative designs</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">ui/ux</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">marketing</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">motion</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">graphic design</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">branding</p>
        <p aria-hidden="true" className="relative py-4 px-5 before:absolute before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-start-3">animation</p>
        </div>
      </div>
    </div>
  );
}

export default MarqueeBar;
