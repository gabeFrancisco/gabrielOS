import { create } from 'zustand'

interface SystemState{
  bears: number,

  increase: (by: number) => void
}

const useSystemStore = create<SystemState>()((set) => ({
    bears: 7,
    increase: () => set((state) => ({bears: state.bears + 1}))
}))

export default useSystemStore;
