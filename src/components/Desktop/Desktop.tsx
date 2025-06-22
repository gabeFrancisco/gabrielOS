import { desktopData } from "../../utils/desktopData";
import MenuBar from "../MainToolbar/MenuBar";
import Icon from "./Icon";

interface Props {
  menu: boolean
}

function Desktop(props: Props) {
  return (
    <div className="grid grid-cols-12 align-baseline py-3">
      {desktopData.map((el, key) => (
        <Icon icon={el.icon} label={el.label} key={key} />
      ))}
      {props.menu && <MenuBar />}
    </div>);
}

export default Desktop;