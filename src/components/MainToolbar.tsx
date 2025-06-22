import Computer from "../../public/icons/desktop.ico"

function MainToolbar() {
  return (<div className="w-screen flex p-1 flex-row justify-between border-t border-2 border-gray-400 bg-gray-200 h-10">
      <img src={Computer} alt="Menu Icon" className="w-7" />
  </div>);
}

export default MainToolbar;