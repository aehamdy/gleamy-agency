function MenuButton() {
    return(
        <button type="button" className="group flex flex-wrap items-center gap-3 z-[100]">
            <div className="hidden md:block uppercase">Menu</div>
            <div className="flex flex-col gap-1.5 w-7">
                <span className="w-full h-1 bg-white"></span>
                <span className="w-1/2 group-hover:w-full h-1 bg-white duration-short"></span>
            </div>
        </button>
    )
}

export default MenuButton;