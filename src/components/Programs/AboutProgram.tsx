import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function AboutProgram(props: Props) {
    return (<Window id="about" title="About this computer" position={props.position}>
        <div className="border border-neutral-400 p-5">
            <div className="text-center">
                <p className="text-xl italic">gabrielOS</p>
                <p>Your ultimate OS for performance!</p>
            </div>
            <hr className="my-2 border-neutral-400" />
            <p>Processor: Intel Pentium III (Tualatin) - 1.4 GHz</p>
            <p>FSB speed: 133 MHz</p>
            <p>Cache: 512KM (L2)</p>
            <hr className="my-2 border-neutral-400" />
            <p>Total RAM: 256 MB | Available: 211 MB</p>
            <p></p>
        </div>
    </Window >);
}

export default AboutProgram;