import Computer from "../../../public/icons/desktop.ico"
import WatchBar from "./WatchBar";

interface Props{
  handleMenuBar: () => void
}

function MainToolbar(props: Props) {
  return (
    <div className="z-10 w-screen flex py-0.5 px-1 flex-row justify-between border-t-3 border-neutral-200 bg-neutral-300 h-10">
      <div onClick={props.handleMenuBar} className="p-1 cursor-pointer hover:bg-sky-800 hover:text-white flex flex-row" style={{
        border: '2px #bbb outset'
      }}>
        <img src={Computer} alt="Menu Icon" className="w-5" />
        <span className="ml-1">Start</span>
      </div>
      <div>
        Program
      </div>
      <WatchBar/>
    </div>);
}

export default MainToolbar;