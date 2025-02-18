<script setup lang="ts"></script>

<template>
  <main>
    <div class="relative h-screen">
      <img
        src="@/assets/hero-image.png"
        alt="Logo"
        style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 73%, rgba(0, 0, 0, 0.3) 85.5%)"
      />
      <div class="icon-container">
        <img src="@/assets/icons/Mountains.svg" alt="Mountains" class="icon" />
        <img src="@/assets/icons/Fishing.svg" alt="Fishing" class="icon" />
        <img src="@/assets/icons/Crosshair.svg" alt="Crosshair" class="icon" />
      </div>
      <button
        class="absolute z-10 w-20 h-20 rounded-full bg-orange-500 flex justify-center items-center chat-button"
      >
        <img src="@/assets/icons/Chats.svg" alt="Chats" class="icon" />
      </button>
    </div>
  </main>
</template>

<style scoped>
.icon-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: absolute;
  gap: 160px;
  top: 920px;
  z-index: 1000;
  width: 100%;
}

.chat-button {
  bottom: 80px;
  right: 148px;
}

.icon {
  width: 40px; /* Điều chỉnh kích thước biểu tượng */
  height: 40px; /* Điều chỉnh kích thước biểu tượng */
  margin: 0 10px; /* Khoảng cách giữa các biểu tượng */
}
</style>
