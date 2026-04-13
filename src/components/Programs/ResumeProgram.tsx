import Window from "../Windows/Window";

interface Props{
    position: {x: number, y: number}
}

function ResumeProgram(props: Props) {
    return ( <Window id="resume" title="Resume" position={props.position}>
        <div className="bg-blue-700">

        </div>
    </Window> );
}

export default ResumeProgram;