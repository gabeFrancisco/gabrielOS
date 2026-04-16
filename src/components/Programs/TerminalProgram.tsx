import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function TerminalProgram(props: Props) {
    const store = useSystemStore();
    return (<Window id="console" onClose={() => store.setOpen('terminal', false)} position={props.position} title="Console">
        <div className="bg-neutral-950 p-5 w-screen h-96"></div>
    </Window>);
}

export default TerminalProgram;