import Computer from "../../../public/icons/desktop.ico"

interface Props{
  handleMenuBar: () => void
}

function MainToolbar(props: Props) {
  return (
    <div className="w-screen flex py-0.5 px-1 flex-row justify-between border-t-3 border-neutral-200 bg-neutral-300 h-10">
      <div onClick={props.handleMenuBar} className="p-1 cursor-pointer hover:bg-zinc-400 flex flex-row" style={{
        border: '2px #bbb outset'
      }}>
        <img src={Computer} alt="Menu Icon" className="w-5" />
        <span className="ml-1">Start</span>
      </div>
    </div>);
}

export default MainToolbar;