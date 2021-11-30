<script setup>
import { useTheme } from '~/store/theme'
const theme = useTheme()
</script>

<template>
  <main>
    <h1>Theme</h1>
    <p>{{ theme.name }}</p>
  </main>
</template>

<style></style>
