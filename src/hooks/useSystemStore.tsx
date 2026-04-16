import { create } from 'zustand'

import Resume from '../../public/icons/resume.ico'
import Folder from '../../public/icons/folder.ico'
import Internet from '../../public/icons/internet.ico'
import Console from '../../public/icons/console.ico'
import Game from '../../public/icons/game.ico'
import Computer from '../../public/icons/computer.ico'
import ResumeProgram from '../components/Programs/ResumeProgram'
import AboutProgram from '../components/Programs/AboutProgram'
import FilesProgram from '../components/Programs/FilesProgram'
import InternetProgram from '../components/Programs/InternetProgram'
import ConsoleProgram from '../components/Programs/ConsoleProgram'
import GameProgram from '../components/Programs/GameProgram'

interface Window {

}

interface Program {
  id: string,
  icon: string,
  title: string,
  isOpen: boolean,
  component: React.ComponentType<any>
}



interface SystemState {
  programs: Array<Program>
  setOpen: (id: string, state: boolean) => void;
}

let programs: Array<Program> = [
  {
    icon: Resume,
    title: "Resume",
    isOpen: false,
    id: "resume",
    component: ResumeProgram
  },
  {
    icon: Folder,
    title: "Somes files",
    isOpen: false,
    id: "files",
    component: FilesProgram
  },
  {
    icon: Internet,
    title: "Web",
    id: "web",
    isOpen: false,
    component: InternetProgram
  },
  {
    icon: Console,
    title: "Terminal",
    isOpen: false,
    id: "terminal",
    component: ConsoleProgram
  },
  {
    icon: Game,
    title: "S. Invaders",
    isOpen: false,
    id: "invaders",
    component: GameProgram
  },
  {
    icon: Computer,
    title: "About computer",
    isOpen: false,
    id: "about",
    component: AboutProgram
  },
];


const useSystemStore = create<SystemState>()((set) => ({
  programs,
  setOpen: (id: string, programState: boolean) =>
    set((state) => ({
      programs: state.programs.map((program) =>
        program.id === id
          ? { ...program, isOpen: programState }
          : program
      )
    }))
}))

export default useSystemStore;
