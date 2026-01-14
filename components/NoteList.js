// components/NoteList.js

// Import the child component
import NoteListItem from "./NoteListItem.js";
// Import our data service to fetch the notes from Local Storage
import dataService from "../dataService.js";

const htmlTemplate = /*html*/`
  <div>
    <h2>My Note List</h2>
    
    <p v-if="notes.length === 0" style="color: grey; font-style: italic;">
      No notes found. Click 'Write Note' to create your first note!
    </p>

    <NoteListItem 
      v-for="note in notes" 
      :key="note.id" 
      :note="note" 
    />
  </div>
`;

export default {
  template: htmlTemplate,
  components: {
    NoteListItem
  },
  // 'data' function returns the reactive state of the component
  data() {
    return {
      // Initialize with an empty array. This will be populated when the component mounts.
      notes: [] 
    }
  },
  // 'mounted' is a lifecycle hook called after the component is inserted into the DOM
  mounted() {
    // Fetch notes from Local Storage using our data service
    this.notes = dataService.getNotes();
    
    // Console log for debugging purposes (optional)
    console.log("Notes loaded:", this.notes);
  }
}