<script setup>
import { computed, ref } from 'vue'
import startOfWeek from 'date-fns/startOfWeek'
import parseISO from 'date-fns/parseISO'
import endOfWeek from 'date-fns/endOfWeek'
// !BUG This function import crashes eveything for some reason
// import format from 'date-fns/format'

const chosenDate = ref('2021-01-01')

const startOfWeekDate = computed(() => {
  return startOfWeek(parseISO(chosenDate.value))
})

const endOfWeekDate = computed(() => {
  return endOfWeek(parseISO(chosenDate.value))
})
</script>

<template>
  <div>
    <h1>Date Calculator</h1>
    <input v-model="chosenDate" type="date" />
    <h2>Output</h2>
    <ul>
      <li>Chosen Date: {{ chosenDate }}</li>
      <li>Start of Week: {{ startOfWeekDate }}</li>
      <li>End Of Week: {{ endOfWeekDate }}</li>
    </ul>
  </div>
</template>
