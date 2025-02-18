<template>
  <div class="error-page">
    <h1>404</h1>
    <p>The page you requested does not exist!</p>
    <router-link to="/" class="home-button">Back home</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.error-page h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.home-button {
  padding: 0.5rem 1rem;
  background-color: #ff5722;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #f4511e;
}
</style>
