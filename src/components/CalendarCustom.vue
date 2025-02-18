<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button class="nav-button" @click="prevMonth">
        <span class="arrow">‹</span>
      </button>
      <h2 class="month-title">{{ monthYear }}</h2>
      <button class="nav-button" @click="nextMonth">
        <span class="arrow">›</span>
      </button>
    </div>

    <div class="calendar-grid">
      <div v-for="day in days" :key="day" class="day-header">
        {{ day }}
      </div>

      <div
        v-for="date in allDates"
        :key="date.toString()"
        class="date-cell"
        :class="{
          occupied: isOccupied(date),
          free: !isOccupied(date),
          'other-month': !isSameMonth(date),
        }"
      >
        <span class="date-number">{{ date.date() }}</span>
        <span class="date-status">{{ isOccupied(date) ? 'Occupé' : 'Libre' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const currentDate = ref(dayjs())
// const selectedDate = ref(dayjs())

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const monthYear = computed(() => {
  return `${monthNames[currentDate.value.month()]} ${currentDate.value.year()}`
})

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const allDates = computed(() => {
  const start = currentDate.value.startOf('month').startOf('week')
  const end = currentDate.value.endOf('month').endOf('week')
  const dates = []

  let date = start
  while (date.isBefore(end) || date.isSame(end)) {
    dates.push(date)
    date = date.add(1, 'day')
  }

  return dates
})

const isSameMonth = (date: dayjs.Dayjs) => {
  return date.month() === currentDate.value.month()
}

const isOccupied = (date: dayjs.Dayjs) => {
  const occupiedDates = [1, 4, 11, 15, 20]
  return occupiedDates.includes(date.date()) && isSameMonth(date)
}

const prevMonth = () => {
  currentDate.value = currentDate.value.subtract(1, 'month')
}

const nextMonth = () => {
  currentDate.value = currentDate.value.add(1, 'month')
}
</script>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
}

.month-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.nav-button {
  background: none;
  border: none;
  font-size: 24px;
  color: #ff5722;
  cursor: pointer;
  padding: 5px 10px;
}

.arrow {
  font-size: 32px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.day-header {
  text-align: center;
  font-weight: bold;
  color: #666;
  padding: 10px;
}

.date-cell {
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 80px;
}

.date-number {
  font-size: 16px;
  font-weight: bold;
}

.date-status {
  font-size: 14px;
}

.occupied {
  background-color: #fff1f1;
  color: #ff0000;
}

.free {
  background-color: #f1fff1;
  color: #008000;
}

.other-month {
  opacity: 0.5;
}
</style>
