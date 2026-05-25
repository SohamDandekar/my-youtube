import { HAM_ICON_URL, USER_ICON_URL, YT_ICON_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="m-4 p-4 shadow-lg grid grid-flow-col">
        <div className="col-span-1 flex">
            <img className="h-8 cursor-pointer" alt="hamburger-icon" src={HAM_ICON_URL}/>
            <a href="/">
                <img className="h-8 mx-2" alt="yt-icon" src={YT_ICON_URL} />
            </a>
        </div>
        <div className="col-span-10 ml-30">
            <input className="border rounded-l-full w-2xl" type="text"/>
            <button className="cursor-pointer px-4 border rounded-r-full bg-gray-200">🔍︎</button>
        </div>
        <div className="col-span-1" >
            <img className="h-8" alt="user-icon" src={USER_ICON_URL} />
        </div>
    </div>
  )
}

export default Header;