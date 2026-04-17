import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function InternetProgram(props: Props) {

    const store = useSystemStore();

    return (<Window title="Browser" id="web" onClose={() => store.setOpen('web', false)} position={props.position}>
        <iframe className="w-screen h-96" src="http://home.mcom.com/home/welcome.html">

        </iframe>

    </Window>);
}

export default InternetProgram;