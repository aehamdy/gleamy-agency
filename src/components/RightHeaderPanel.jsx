import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

function RightHeaderPanel() {
    return(
        <div className="flex gap-10 h-6">
            <SearchButton />
            <span className="w-[1px] h-full bg-white-03"></span>
            <MenuButton />
        </div>
    )
}

export default RightHeaderPanel;