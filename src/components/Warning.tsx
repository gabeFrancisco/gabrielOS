function Warning() {
  return (
    <div className="absolute w-screen flex flex-col justify-center items-center h-screen">

      <div className="bg-blue-600 p-2 w-1/2 h-1/3 flex flex-col justify-center items-center">
        <div className="border-3 text-lg text-gray-100 border-double border-gray-100 p-3 flex flex-col justify-center items-center">
          This computer/system is under development! Will be fully operational soon!
        </div>
      </div>
    </div>);
}

export default Warning;