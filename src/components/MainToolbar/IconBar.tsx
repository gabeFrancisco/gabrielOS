import Dialup from "../../../public/icons/dialup.ico"

function IconBar() {
  return ( <div style={{
    border: "2px #bbb inset"
  }} className="w-18 text-lg bg-gray-300 flex flex-row items-center justify-center">
    <img src={Dialup} className="w-7" alt="" />
  </div> );
}

export default IconBar;