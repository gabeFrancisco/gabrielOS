import Draggable from "../Draggable/Draggable";

function Window() {
  return (
    <Draggable >
      <div className="border border-gray-100 text-center bg-blue-900 text-white w-full px-2 py-0.5">
        Windows
      </div>
      <div className="h-full grow bg-gray-100 p-12">

      </div>
    </Draggable>
  );
}

export default Window;