<script setup>
import { useThemeStore } from '~/store/theme'
const theme = useThemeStore()
</script>

<template>
  <main>
    <h1>Theme</h1>
    <p>{{ theme.name }}</p>
    <button @click="theme.setTheme">Set Theme</button>
  </main>
</template>

<style></style>
