<script setup lang="ts">
import { computed, ref } from 'vue'
import MountainsIcon from '@/assets/icons/Mountains.svg'
import FishingIcon from '@/assets/icons/Fishing.svg'
import CrosshairIcon from '@/assets/icons/Crosshair.svg'
import { useI18n } from 'vue-i18n'

interface Activity {
  id: number
  name: string
  icon: string
  position: {
    top: string
    left: string
  }
  activities: string[]
}

const { t } = useI18n()

const selectedMarker = ref<Activity | null>(null)
const isZoomed = ref(false)

const activities = computed(() => [
  {
    id: 1,
    name: t('map.case1'),
    icon: MountainsIcon,
    position: { top: '30%', left: '40%' },
    activities: ['Randonnée', 'Camping', 'Observation'],
  },
  {
    id: 2,
    name: t('map.case2'),
    icon: FishingIcon,
    position: { top: '45%', left: '55%' },
    activities: ['Pêche', 'Kayak', 'Natation'],
  },
  {
    id: 3,
    name: t('map.case3'),
    icon: CrosshairIcon,
    position: { top: '35%', left: '48%' },
    activities: ['Chasse', "Tir à l'arc", 'Safari'],
  },
])

const handleMarkerClick = (activity: Activity) => {
  selectedMarker.value = activity
  isZoomed.value = true
}

const resetInteraction = () => {
  selectedMarker.value = null
  isZoomed.value = false
}

const handleActivityClick = (activity: Activity) => {
  selectedMarker.value = activity
  isZoomed.value = true
}
</script>

<template>
  <div class="map-section">
    <div class="flex items-center justify-center gap-4 mb-4">
      <hr class="line w-1/4 text-[#BBBBBB]" />
      <h2 class="title">{{ t('map.title') }}</h2>
      <hr class="line w-1/4 text-[#BBBBBB]" />
    </div>

    <div class="activities-nav">
      <button
        v-for="activity in activities"
        :key="activity.id"
        class="activity-btn"
        :class="{ active: selectedMarker?.id === activity.id }"
        @click="handleActivityClick(activity)"
      >
        <img :src="activity.icon" :alt="activity.name" class="activity-icon" />
        {{ activity.name }}
      </button>
    </div>

    <div class="map-container">
      <div class="map-wrapper" :class="{ 'is-zoomed': isZoomed }">
        <div class="map-label">
          <img src="@/assets/sample-logo.png" alt="Location" class="location-icon" />
          <span>Emplacement</span>
        </div>
        <img src="@/assets/map.png" alt="Map" class="map-image" />
        <div
          v-for="activity in activities"
          :key="activity.id"
          class="map-marker"
          :class="{ active: selectedMarker?.id === activity.id }"
          :style="{ top: activity.position.top, left: activity.position.left }"
          @click="handleMarkerClick(activity)"
        >
          <img :src="activity.icon" :alt="activity.name" />
        </div>

        <div v-if="selectedMarker" class="marker-details">
          <h3>{{ selectedMarker.name }}</h3>
          <!-- <ul>
            <li v-for="(act, index) in selectedMarker.activities" :key="index">
              {{ act }}
            </li>
          </ul> -->
          <button class="reset-btn" @click="resetInteraction">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-section {
  padding: 3rem;
  /* background-color: #fff5f5; */
}

.title {
  text-align: center;
  color: #ff5722;
  font-size: 2rem;
  font-weight: bold;
  /* margin-bottom: 2rem; */
}

.activities-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.activity-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.activity-btn.active,
.activity-btn:hover {
  background-color: #ff5722;
  color: white;
}

.activity-icon {
  width: 24px;
  height: 24px;
  color: black;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.map-label {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #e8f5e9;
  border-radius: 0.5rem;
  width: fit-content;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 2px 10px 0px rgba(51, 51, 51, 0.1);
  backdrop-filter: blur(7.5px);
  color: var(--3, #562c2c);
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  z-index: 2;
}

.location-icon {
  width: 20px;
  height: 20px;
}

.map-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.map-wrapper.is-zoomed .map-image {
  transform: scale(1.2);
  transition: transform 0.5s ease;
}

.map-marker {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  transition: all 0.5s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.map-wrapper.is-zoomed .map-marker {
  transform: translate(-50%, -100%) scale(1.2);
}

.map-marker::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #fff;
  z-index: -1;
}

.map-marker img {
  width: 32px;
  height: 32px;
  padding: 6px;
  background: white;
  border-radius: 50%;
  border: 2px solid #ff5722;
}

.map-marker.active {
  transform: translate(-50%, -100%) scale(1.2);
  z-index: 2;
}

.map-marker.active img {
  background: #ff5722;
  filter: brightness(0) invert(1);
}

.map-marker.active::after {
  border-top-color: #ff5722;
}

.map-marker:hover {
  transform: translate(-50%, -100%) scale(1.1);
}

.marker-details {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  transform-origin: bottom left;
  max-width: 300px;
  width: auto;
}

.marker-details h3 {
  color: #ff5722;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  word-wrap: break-word;
  z-index: 9999;
}

.marker-details ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.marker-details li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  word-wrap: break-word;
}

.reset-btn {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

@media (max-width: 767px) {
  .map-section {
    padding: 1rem;
  }

  .activities-nav {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .activity-btn {
    font-size: 12px;
    padding: 0.25rem 0.5rem;
  }

  .map-label {
    font-size: 14px;
    padding: 0.25rem;
  }

  .marker-details {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    border-radius: 1rem 1rem 0 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }

  .marker-details h3 {
    font-size: 1.1rem;
    text-align: center;
  }

  .marker-details ul {
    margin: 1rem 0;
  }

  .marker-details li {
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .marker-details li:last-child {
    border-bottom: none;
  }

  .reset-btn {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .marker-details {
    animation: slideUp 0.3s ease-out;
    z-index: 9999;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .map-section {
    padding: 2rem;
  }

  .activities-nav {
    gap: 0.75rem;
  }

  .marker-details {
    max-width: 400px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
  }

  .marker-details h3 {
    font-size: 1.15rem;
  }
}
</style>
