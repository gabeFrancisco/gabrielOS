import { desktopData } from "../../utils/desktopData";
import MenuBar from "../MainToolbar/MenuBar";
import Icon from "./Icon";

interface Props {
  menu: boolean
}

function Desktop(props: Props) {
  return (
    <div className="flex flex-col flex-wrap w-full items-start">
      <div className="p-3">
        {desktopData.map((el, key) => (
          <Icon icon={el.icon} label={el.label} key={key} />
        ))}

      </div>
      {props.menu && <MenuBar />}
    </div>);
}

export default Desktop;