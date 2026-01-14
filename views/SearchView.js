// views/SearchView.js

import SearchBar from "../components/SearchBar.js"; // (Optional: if you want to keep using the component)
import NoteListItem from "../components/NoteListItem.js";
import dataService from "../dataService.js";

const htmlTemplate = /*html*/`
  <div>
    <h2>Search Notes</h2>
    
    <div style="margin: 15px 0;">
      <label for="search-input" style="font-weight: bold;">Keyword:</label>
      <br>
      <input 
        type="search" 
        id="search-input" 
        v-model="searchQuery" 
        placeholder="Type to search..."
        style="width: 100%; padding: 10px; margin-top: 5px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;"
      >
    </div>
    
    <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
    
    <div v-if="filteredNotes.length > 0">
      <p>Found <strong>{{ filteredNotes.length }}</strong> result(s):</p>
      <NoteListItem 
        v-for="note in filteredNotes" 
        :key="note.id" 
        :note="note" 
      />
    </div>
    
    <div v-else-if="searchQuery">
      <p style="color: #d9534f;">No results found for "{{ searchQuery }}".</p>
    </div>
    
    <div v-else>
      <p style="color: #777;">Type something above to search your notes.</p>
    </div>
  </div>
`;

export default {
  template: htmlTemplate,
  components: { SearchBar, NoteListItem },
  data() {
    return {
      allNotes: [],
      searchQuery: ''
    }
  },
  computed: {
    // Computed property to filter notes dynamically
    filteredNotes() {
      // If query is empty, return empty list (or all notes if you prefer)
      if (!this.searchQuery) return [];
      
      const lowerQuery = this.searchQuery.toLowerCase();
      // Filter by title OR content
      return this.allNotes.filter(note => 
        note.title.toLowerCase().includes(lowerQuery) || 
        note.content.toLowerCase().includes(lowerQuery)
      );
    }
  },
  mounted() {
    // Load all notes when the view mounts
    this.allNotes = dataService.getNotes();
  }
}