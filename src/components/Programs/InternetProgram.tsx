import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function InternetProgram(props: Props) {

    const store = useSystemStore();

    return (<Window title="Browser" id="web" onClose={() => store.setOpen('web', false)} position={props.position}>
        <div>
            <iframe className="w-screen h-96" src="https://web.archive.org/web/20001019044252/http://www.counter-strike.net/">

            </iframe>
        </div>
    </Window>);
}

export default InternetProgram;