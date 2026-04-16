import { useDoubleTap } from "../../hooks/useDoubleTap";

interface Props {
  icon: string,
  label: string,
  doubleClick: () => void
}

function Icon(props: Props) {
  const handleDoubleTap = useDoubleTap(props.doubleClick);
  return (
    <div onDoubleClick={props.doubleClick} onTouchEnd={handleDoubleTap} className="m-5 p-1 flex flex-col justify-center items-center cursor-pointer hover:bg-sky-700 backdrop-opacity-70">
      <img src={props.icon} alt="Resume" className="w-9" />
      <p className="text-white text-sm mt-1">{props.label}</p>
    </div >);
}

export default Icon;