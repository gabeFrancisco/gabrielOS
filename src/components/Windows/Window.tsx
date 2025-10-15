import Draggable from "../Draggable/Draggable";

function Window() {
  return (
    <Draggable>
      <div className="w-3/4 top-32 left-32 absolute">
        <div className="border border-gray-100 text-center bg-blue-900 text-white w-full px-2 py-0.5">
          Windows
        </div>
        <div className="h-full grow bg-gray-100 p-12">

        </div>
      </div>
    </Draggable>
  );
}

export default Window;