<script setup lang="ts">
import ActivitiesMap from '@/components/ActivitiesMap.vue'
import CalendarCustom from '@/components/CalendarCustom.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="hero-section">
    <div class="hero-image-container">
      <img src="@/assets/hero-image.png" alt="Hero" class="hero-image" />
      <div class="gradient-overlay"></div>
    </div>

    <div class="icons-section">
      <div class="icons-wrapper">
        <div class="icon-item">
          <img src="@/assets/icons/Mountains.svg" alt="Mountains" class="icon" />
        </div>
        <div class="icon-item">
          <img src="@/assets/icons/Fishing.svg" alt="Fishing" class="icon" />
        </div>
        <div class="icon-item">
          <img src="@/assets/icons/Crosshair.svg" alt="Crosshair" class="icon" />
        </div>
      </div>
    </div>

    <button class="chat-button">
      <img src="@/assets/icons/Chats.svg" alt="Chats" class="icon" />
    </button>
  </div>
  <div class="map-container">
    <ActivitiesMap />
  </div>
  <div class="activity-container">
    <div class="flex items-center justify-center gap-4 mb-4">
      <hr class="line w-1/4 text-[#BBBBBB]" />
      <h2 class="activity-title">{{ t('booking.title') }}</h2>
      <hr class="line w-1/4 text-[#BBBBBB]" />
    </div>
    <CalendarCustom />

    <form class="activity-form">
      <div class="form-row">
        <div class="form-group">
          <label>Nom:</label>
          <input type="text" placeholder="Entrez votre nom" class="form-input" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Entrez votre e-mail" class="form-input" />
        </div>
      </div>

      <div class="form-group">
        <label>Message:</label>
        <div class="rich-text-editor">
          <div class="editor-toolbar">
            <div class="toolbar-left">
              <select class="font-size">
                <option>18</option>
              </select>
              <div class="divider"></div>
              <button type="button" class="toolbar-btn"><i class="fas fa-bold"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-italic"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-underline"></i></button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-strikethrough"></i>
              </button>
              <div class="divider"></div>
              <button type="button" class="toolbar-btn"><i class="fas fa-align-left"></i></button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-align-center"></i>
              </button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-align-right"></i>
              </button>
              <div class="divider"></div>
              <button type="button" class="toolbar-btn"><i class="fas fa-list-ul"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-list-ol"></i></button>
            </div>
            <div class="toolbar-right">
              <button type="button" class="toolbar-btn"><i class="fas fa-link"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-image"></i></button>
            </div>
          </div>
          <div class="editor-content" contenteditable="true">
            <h6>Heading 6</h6>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to
            </p>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>Fichier:</label>
        <div class="file-upload">
          <div class="file-upload-content">
            <span class="file-icon">📎</span>
            <span class="file-text">Pièce jointe</span>
            <span class="file-type">(*fichiers pdf uniquement)</span>
          </div>
          <input type="file" accept=".pdf" class="file-input" />
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="clear-btn">Clear All</button>
        <button type="submit" class="submit-button">
          Envoyer
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.icons-section {
  position: absolute;
  bottom: 120px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.icons-wrapper {
  display: flex;
  gap: 160px;
  padding: 0 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 48px;
  height: 48px;
  transition: transform 0.3s ease;
}

.icon-item:hover .icon {
  transform: scale(1.1);
}

.icon-label {
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.chat-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff5722;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  z-index: 20;
}

.chat-button:hover {
  transform: scale(1.05);
  background-color: #f4511e;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .icons-wrapper {
    gap: 100px;
  }
}

@media (max-width: 768px) {
  .icons-wrapper {
    gap: 60px;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  .chat-button {
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .icons-wrapper {
    gap: 40px;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  .icon-label {
    font-size: 12px;
  }
}

.map-container {
  /* background: white;
  padding: 40px;
  border-radius: 12px; */
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  background-color: #fff5f5;
  /* width: 90%;
  max-width: 1200px;
  margin: 0 auto; */
}

.activity-container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.activity-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #ff5722;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}

.rich-text-editor {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.editor-toolbar {
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.divider {
  width: 1px;
  height: 24px;
  background: #e0e0e0;
  margin: 0 8px;
}

.font-size {
  padding: 6px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
}

.toolbar-btn {
  padding: 6px;
  background: none;
  border: none;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
}

.toolbar-btn:hover {
  background-color: #e9ecef;
  color: #333;
}

.editor-content {
  min-height: 200px;
  padding: 16px;
  font-size: 14px;
}

.file-upload {
  border: 1px dashed #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  position: relative;
}

.file-upload-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.file-icon {
  font-size: 20px;
}

.file-text {
  color: #333;
  font-weight: 500;
}

.file-type {
  color: #666;
  font-size: 13px;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
}

.clear-btn {
  padding: 12px 24px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #666;
  font-weight: 500;
  cursor: pointer;
}

.submit-button {
  padding: 12px 24px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.submit-button:hover {
  background-color: #f4511e;
}

/* Tablet Landscape (>=1024px và <1920px) */
@media (min-width: 1024px) and (max-width: 1919px) {
  .activity-container {
    width: 95%;
    padding: 20px;
  }

  .icons-wrapper {
    gap: 100px;
  }
}

/* Tablet Portrait (>=768px và <1024px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .activity-container {
    width: 90%;
    padding: 15px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .icons-wrapper {
    gap: 60px;
  }

  .activity-title {
    font-size: 24px;
  }
}

/* Mobile (iPhone 14/16 Pro Max) (<768px) */
@media (max-width: 767px) {
  .hero-section {
    height: 70vh;
  }

  .activity-container {
    width: 100%;
    padding: 15px;
    border-radius: 0;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .icons-wrapper {
    gap: 30px;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  .activity-title {
    font-size: 20px;
  }

  .chat-button {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }

  .editor-toolbar {
    flex-wrap: wrap;
    gap: 8px;
  }

  .toolbar-left,
  .toolbar-right {
    width: 100%;
    justify-content: center;
  }
}
</style>
