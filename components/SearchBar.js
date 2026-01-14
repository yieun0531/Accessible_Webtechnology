// components/SearchBar.js
// This component is just a static search bar for Task 1.

const htmlTemplate = /*html*/`
  <div style="margin: 10px 0;">
    <label for="search-input">Search Notes:</label>
    <input type="search" id="search-input" placeholder="find a note...">
    <button>Search</button>
  </div>
`;

export default {
  template: htmlTemplate,
}