import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => ({
    name: 'theme-name'
  })
})
