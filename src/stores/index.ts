import { create } from 'zustand'

type Theme = 'light' | 'dark'

export type State = {
  theme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

export const useStore = create<State>((set) => ({
  theme: 'light',
  setTheme: (theme) => {
    set({ theme })
  },
}))
