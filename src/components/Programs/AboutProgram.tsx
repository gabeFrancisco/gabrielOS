import { useEffect, useState } from "react";
import Window from "../Windows/Window";

import Pentium3 from "../../../public/p3.png";

interface Props {
    position: { x: number, y: number }
}

function AboutProgram(props: Props) {
    function getFrequencies() {
        return Math.random() * (1400.00 - 66.00) + 66.00;
    }

    const [frequency, setFrequency] = useState<number>(66);

    useEffect(() => {
        const interval = setInterval(() => { setFrequency(getFrequencies()) }, 2000)
        return () => clearInterval(interval);
    }, [])

    return (<Window id="about" title="About this computer" position={props.position}>
        <div className="border border-neutral-400 p-5">
            <div className="text-center">
                <p className="text-xl italic">gabrielOS</p>
                <p>Your ultimate OS for performance!</p>
                <p>Version: 1.7 - Rev: 2.1</p>
                <small>Thank you for using it!</small>
            </div>
            <hr className="my-2 border-neutral-400" />
            <div className="w-full flex flex-col justify-center items-center my-3">
                <img src={Pentium3} alt="Pentium-3" className="w-24" />
            </div>
            <p>Processor: Intel Pentium III (Tualatin) - 1.4 GHz</p>
            <p>Actual clock: {frequency.toFixed(0)} MHz</p>
            <p>FSB speed: 133 MHz</p>
            <p>Cache: 512KM (L2)</p>
            <p>Instructions: MMX, SSE</p>
            <hr className="my-2 border-neutral-400" />
            <p>Memory: 256 MB  |  Available: 211 MB</p>
            <hr className="my-2 border-neutral-400" />
            <p>Storage: 71 GB  |  Used: 5.7 GB</p>
            <button className="btn mt-2 w-full text-center">Ok!</button>
        </div>
    </Window >);
}

export default AboutProgram;