interface Props{
  icon: string,
  label: string,
}

function Icon(props: Props) {
  return (
    <div className="m-5 p-1 flex flex-col justify-center items-center cursor-pointer hover:bg-sky-700 backdrop-opacity-70">
      <img src={props.icon} alt="Resume" className="w-12" />
      <p className="text-white text-sm mt-1">{props.label}</p>
    </div >);
}

export default Icon;