import ResumeIcon from "../../../public/icons/resume.ico"

function Icon() {
  return (
    <div className="m-2 flex flex-col justify-center items-center cursor-pointer hover:bg-sky-700 backdrop-opacity-70">
      <img src={ResumeIcon} alt="Resume" className="w-12" />
      <p className="text-white text-sm mt-1">Resume</p>
    </div >);
}

export default Icon;