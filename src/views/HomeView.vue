<script setup lang="ts">
import ActivitiesMap from '@/components/ActivitiesMap.vue'
import CalendarCustom from '@/components/CalendarCustom.vue'
</script>

<template>
  <main>
    <div class="relative h-screen">
      <img
        src="@/assets/hero-image.png"
        alt="Logo"
        style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 73%, rgba(0, 0, 0, 0.3) 85.5%)"
      />
      <!-- <div class="icon-container">
        <img src="@/assets/icons/Mountains.svg" alt="Mountains" class="icon" />
        <img src="@/assets/icons/Fishing.svg" alt="Fishing" class="icon" />
        <img src="@/assets/icons/Crosshair.svg" alt="Crosshair" class="icon" />
      </div>
      <button
        class="absolute z-10 w-20 h-20 rounded-full bg-orange-500 flex justify-center items-center chat-button"
      >
        <img src="@/assets/icons/Chats.svg" alt="Chats" class="icon" />
      </button> -->
    </div>
    <div class="map-container">
      <ActivitiesMap />
    </div>
    <div class="activity-container">
      <h2 class="activity-title">NOS ACTIVITÉS</h2>
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
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to
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

.activity-container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.activity-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
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
</style>
