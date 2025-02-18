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

const MOCKED_OCCUPIED_DATES = ['28/01/2025', '29/01/2025', '04/02/2025']

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
  const formattedDate = date.format('DD/MM/YYYY')
  return MOCKED_OCCUPIED_DATES.includes(formattedDate)
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
  border-radius: 24px;
  border: 1px solid rgba(86, 44, 44, 0.3);
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(242, 84, 45, 0.1);
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
  display: flex;
  height: 72px;
  padding: 8px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
}

.date-number {
  font-size: 16px;
  font-weight: bold;
}

.date-status {
  font-size: 14px;
}

.occupied {
  border: 1px solid #d7d7d7;
  background: #fff;
}

.free {
  border: 1px solid #f2542d;
  background: #fff4f1;
}

.other-month {
  border: 1px solid #dfdfdf;
  background: #f5f5f5;
}
</style>
