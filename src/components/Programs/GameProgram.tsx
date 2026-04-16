import { useState } from "react";
import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function GameProgram(props: Props) {
    const store = useSystemStore();
    const [loading, setLoading] = useState(true)

    return (<Window id="invaders" onClose={() => store.setOpen("invaders", false)} position={props.position} title="Space Invaders" >
        {loading && <div className="p-5">
            Loading
        </div>}
        <iframe onLoad={() => setLoading(false)} className="w-fit h-96 scale-110" src="https://freeinvaders.org/"></iframe>

    </Window>);
}

export default GameProgram;