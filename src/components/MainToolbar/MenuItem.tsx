interface Props{
  label: string
}

function MenuItem(props: Props) {
  return (
    <div className="hover:bg-blue-800 cursor-pointer w-full hover:text-white">
      {props.label}
    </div>
  );
}

export default MenuItem;