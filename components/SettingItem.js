// components/SettingItem.js
// This is a reusable component for one setting item.
// (Note: For Task 1, the title "Font Size" is hard-coded inside).

const htmlTemplate = /*html*/`
<div class="setting-item" style="margin-top: 10px;">
  
  <strong class="setting-title" style="margin-right: 10px;">Font Size</strong>
  
  <div class="setting-control" style="display: inline;">
    <select>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="small">Small</option>
    </select>
  </div>

</div>
`;

export default {
  template: htmlTemplate
}