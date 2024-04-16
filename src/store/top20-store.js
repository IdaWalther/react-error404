import {create} from "zustand";

const useTop20Store = create((set) => ({
    top20: [],
    addTop20: (newTop20) => set({ top20: newTop20 }),
}));

export default useTop20Store;