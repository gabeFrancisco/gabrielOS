import { desktopData } from "../../utils/desktopData";
import MenuItem from "./MenuItem";

function MenuBar() {
  return (
    <div style={{
      border: "2px #bbb outset"
    }} className="absolute bottom-10 w-1/4 bg-gray-300 flex flex-row">
      <div style={{
        textOrientation: 'mixed',
        writingMode: "sideways-lr",
        textOverflow: "ellipsis"
      }} className="w-8 px-7 pl-1 bg-gradient-to-t from-blue-700 to-teal-800 text-white bg-blue-500">gabrielOS</div>
      <div className="flex flex-col px-3 py-1 w-full">
        {desktopData.map((el, index) => (
          <MenuItem key={index} label={el.label}/>
        ))}
      </div>
    </div>
  );
}

export default MenuBar;