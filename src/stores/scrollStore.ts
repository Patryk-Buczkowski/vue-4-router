import { defineStore } from 'pinia';

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    scrollPosition: 0,
  }),
  actions: {
    setScrollPosition(position: number) {
      this.scrollPosition = position;
    },
  },
});
