<script setup lang="ts">
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
    <div class="activity-container">
      <h2 class="activity-title">NOS ACTIVITÉS</h2>
      <CalendarCustom />

      <form class="activity-form">
        <div class="form-group">
          <label>Nom:</label>
          <input type="text" placeholder="Entrez votre nom" class="form-input" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Entrez votre e-mail" class="form-input" />
        </div>

        <div class="form-group">
          <label>Message:</label>
          <div class="rich-text-editor">
            <div class="editor-toolbar">
              <select class="font-size">
                <option>18</option>
              </select>
              <button type="button" class="toolbar-btn"><i class="fas fa-bold"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-italic"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-underline"></i></button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-strikethrough"></i>
              </button>
              <button type="button" class="toolbar-btn"><i class="fas fa-align-left"></i></button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-align-center"></i>
              </button>
              <button type="button" class="toolbar-btn">
                <i class="fas fa-align-right"></i>
              </button>
              <button type="button" class="toolbar-btn"><i class="fas fa-list-ul"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-list-ol"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-link"></i></button>
              <button type="button" class="toolbar-btn"><i class="fas fa-image"></i></button>
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
            <span class="file-icon">📎</span>
            <span class="file-text">Pièce jointe</span>
            <span class="file-type">(*fichiers pdf uniquement)</span>
            <input type="file" accept=".pdf" class="file-input" />
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="clear-btn">Clear All</button>
          <button type="submit" class="submit-button">Envoyer</button>
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
  position: absolute;
  top: 1000px; /* Điều chỉnh vị trí của hoạt động */
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
}

.activity-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.calendar {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.activity-form {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #ff5722;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.rich-text-editor {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.editor-toolbar {
  padding: 8px;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 8px;
  align-items: center;
}

.font-size {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.toolbar-btn {
  padding: 4px 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.toolbar-btn:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.editor-content {
  min-height: 150px;
  padding: 12px;
}

.file-upload {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.file-icon {
  font-size: 20px;
}

.file-type {
  color: #666;
  font-size: 0.9em;
}

.file-input {
  display: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.clear-btn {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.submit-button {
  padding: 8px 16px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
