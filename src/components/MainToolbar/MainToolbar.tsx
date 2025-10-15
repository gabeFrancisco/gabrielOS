import { useState } from "react";
import Computer from "../../../public/icons/desktop.ico"
import IconBar from "./IconBar";
import WatchBar from "./WatchBar";
import useOutsideClick from "../../hooks/useOutsideClick";
import MenuBar from "./MenuBar";

// interface Props {
//   handleMenuBar: () => void
// }

function MainToolbar() {
  const [menu, setMenu] = useState(false);
  const ref = useOutsideClick(setMenu);
  const handleMenu = () => setMenu(menu => !menu)

  return (
    <>
      <div ref={ref}>
        {menu && <MenuBar />}

      </div>
      <div className="z-10 w-screen flex py-0.5 px-1 flex-row justify-between border-t-3 border-neutral-200 bg-neutral-300 h-10">
        <div onClick={handleMenu} className="p-1 cursor-pointer hover:bg-blue-800 hover:text-white flex flex-row" style={{
          border: '2px #bbb outset'
        }}>
          <img src={Computer} alt="Menu Icon" className="w-5" />
          <span className="ml-1">Start</span>
        </div>
        <div>
          Program
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