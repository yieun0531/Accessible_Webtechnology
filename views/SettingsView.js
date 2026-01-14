// views/SettingsView.js

import dataService from "../dataService.js";

const htmlTemplate = /*html*/`
<main>
  <h2>App Settings</h2>
  <p>Manage your preferences for display.</p>

  <section class="settings-group">
    <h3>Display Options</h3>
    
    <div class="setting-item" style="margin-top: 10px;">
      <strong class="setting-title" style="margin-right: 10px;">Font Size</strong>
      <select v-model="settings.fontSize" @change="updateSettings">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>

    <div class="setting-item" style="margin-top: 20px;">
      <strong class="setting-title" style="margin-right: 10px;">Enable Dark Mode</strong>
      <input type="checkbox" id="dark-mode" v-model="settings.darkMode" @change="updateSettings">
    </div>
  </section>

  <section class="settings-group" style="margin-top: 30px; border-top: 1px solid #ccc; padding-top: 10px;">
    <h3>Data Management</h3>
    <div class="setting-item" style="margin-top: 10px;">
      <p>Current Note Count: <strong>{{ noteCount }}</strong></p>
    </div>
  </section>
</main>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      // Local state to hold settings
      settings: {
        darkMode: false,
        fontSize: 'medium'
      },
      noteCount: 0
    }
  },
  mounted() {
    // Load saved settings when the view is mounted
    this.settings = dataService.getSettings();
    // Get the total number of notes for the statistics section
    this.noteCount = dataService.getNotes().length;
  },
  methods: {
    /**
     * Save the current state of settings to Local Storage via dataService.
     */
    updateSettings() {
      dataService.saveSettings(this.settings);
    }
  }
}