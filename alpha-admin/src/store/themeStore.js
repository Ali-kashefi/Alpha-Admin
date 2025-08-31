import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      Theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          Theme: state.Theme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'theme', 
    }
  )
);