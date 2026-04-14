import type { MouseEventHandler } from "react";

interface Props{
    id: string,
    title: string,
    icon: string,
    onClick: MouseEventHandler
}

function MainToolbarItem(props: Props) {
    return (   <div onClick={props.onClick} className="py-0.5 px-3  cursor-pointer hover:bg-blue-800 hover:text-white flex flex-row justify-center items-center" style={{
          border: '2px outset #ccc ',
          boxShadow: '1px 1px 0 0 #333',
        }}>
          {/* <img src= {"Computer"} alt="Menu Icon" className="w-5" /> */}
            <img className="w-5 h-5" src={props.icon} alt="Ícone"/>
            <span className="ml-1">{props.title}</span>
        </div> );
}

export default MainToolbarItem;