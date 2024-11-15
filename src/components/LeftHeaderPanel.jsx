const texts = ['fb', 'in', 'dr', 'be'];

function LeftHeaderPanel() {
    return(
        <ul className="flex gap-10">
            {texts.map((text, i) => (
                <li key={i} className="relative uppercase before:absolute first:before:content-none before:w-[5px] before:h-[5px] before:top-[50%] before:translate-y-[-50%] before:start-[-20px] before:translate-x-[-50%] before:bg-accent before:rounded-full">{text}</li>
            ))}
        </ul>
    )
}

export default LeftHeaderPanel;