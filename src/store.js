import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () =>
    set((state) => ({ count: Math.max(0, state.count - 1) })),
  multiplyCount: () => set((state) => ({ count: state.count * 2 })),
  resetCount: () => set(() => ({ count: 0 })),
}));

export default useStore;
