import MenuBar from "../MainToolbar/MenuBar";
import Icon from "./Icon";

interface Props{
  menu: boolean
}

function Desktop(props: Props) {
  return (
    <div className="grid grid-cols-12 py-3">
      <Icon />
      {props.menu && <MenuBar/>}
    </div>);
}

export default Desktop;