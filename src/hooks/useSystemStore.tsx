import { create } from 'zustand'
import { desktopData } from '../utils/desktopData';

interface Program{
  id: string,
  icon: string,
  title: string,
  isOpen: boolean,
}

interface SystemState{
  programs: Array<Program>
  setOpen: (id: string, state: boolean) => void;
}

let programs: Array<Program> = [];

desktopData.map(data => {
  programs.push({
    icon: data.icon,
    isOpen: false,
    title: data.label,
    id: data.id
  })
})

const useSystemStore = create<SystemState>()((set) => ({
    programs,
    setOpen: (id: string, programState: boolean) =>
      set((state) => ({
        programs: state.programs.map((program) =>
          program.id === id
            ? {...program, isOpen: programState}
            : program
        )
      }))
}))

export default useSystemStore;
