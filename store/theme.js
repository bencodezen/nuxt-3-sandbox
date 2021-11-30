import { defineStore } from 'pinia'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()

export const useThemeStore = defineStore('theme', {
  state: () => ({
    name: 'theme-name'
  }),
  actions: {
    setTheme() {
      this.name += userStore.name
    }
  }
})
