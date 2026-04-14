import { useState } from "react";
import Computer from "../../../public/icons/desktop.ico"
import IconBar from "./IconBar";
import WatchBar from "./WatchBar";
import useOutsideClick from "../../hooks/useOutsideClick";
import MenuBar from "./MenuBar";
import MainToolbarItem from "./MainToolbarItem";
import useSystemStore from "../../hooks/useSystemStore";

// interface Props {
//   handleMenuBar: () => void
// }

function MainToolbar() {
  const [menu, setMenu] = useState(false);
  const ref = useOutsideClick(setMenu);
  const handleMenu = () => setMenu(menu => !menu)

  const programs = useSystemStore().programs;

  return (
    <>
      {menu && <MenuBar ref={ref} />}
      <div className="z-10 w-screen flex py-0.5 px-1 flex-row justify-between border-t-3 border-neutral-200 bg-neutral-300 h-10">
        <div onClick={handleMenu} className="py-1 px-3 cursor-pointer hover:bg-blue-800 hover:text-white flex flex-row" style={{
          border: '2px outset #ccc ',
          boxShadow: '1px 1px 0 0 #333',
        }}>
          <img src={Computer} alt="Menu Icon" className="w-5" />
          <span className="ml-1 pr-5">Start</span>
        </div>
        <div className="w-full flex flex-row items-center px-2">
          {programs
            .filter(el => el.isOpen === true)
            .map((el, key) => (
            <MainToolbarItem key={key} id={el.id} icon={el.icon} onClick={() => alert("Clicked! God bless you!")} title={el.title}/>
          ))}
        </div>
        <div className="flex flex-row">
          <IconBar />
          <WatchBar />
        </div>
      </div>
    </>
  );
}

export default MainToolbar;