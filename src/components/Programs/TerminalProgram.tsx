import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function TerminalProgram(props: Props) {
    const store = useSystemStore();
    return (
        <Window id="terminal" onClose={() => store.setOpen('terminal', false)} position={props.position} title="Terminal">
            <div className="bg-neutral-950 w-2xl p-5 h-96"></div>
        </Window>);
}

export default TerminalProgram;