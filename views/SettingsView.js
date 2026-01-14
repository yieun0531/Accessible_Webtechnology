// views/SettingsView.js

// 1. Import the SettingItem component.
// (The path is ../components/ because we are in the 'views' folder)
import SettingItem from "../components/SettingItem.js";

const htmlTemplate = /*html*/`
<main>
  <h2>App Settings</h2>
  <p>Manage your preferences for display and note creation.</p>

  <section class="settings-group">
    <h3>Display Options</h3>
    
    <SettingItem />

    <SettingItem />

    <div class="setting-item" style="margin-top: 10px;">
      <strong class="setting-title" style="margin-right: 10px;">Enable Dark Mode</strong>
      <input type="checkbox" id="dark-mode" checked>
    </div>
  </section>

  <section class="settings-group" style="margin-top: 20px;">
    <h3>Privacy & Data</h3>
    <div class="setting-item" style="margin-top: 10px;">
      <strong class="setting-title" style="margin-right: 10px;">Export All Notes</strong>
      <button>Export Data (JSON)</button>
    </div>
  </section>
</main>
`;

export default {
  template: htmlTemplate,
  // 2. Register the component for use in this view.
  components: { 
    SettingItem 
  }
}