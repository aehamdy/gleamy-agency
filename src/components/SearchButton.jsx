import searchIcon from "../assets/search-icon.svg";

function SearchButton() {
    return (
        <button type="button" className="hidden md:block">
            <img src={searchIcon} alt="Search" className="" />
        </button>
    )
}

export default SearchButton;