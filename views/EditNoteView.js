// views/EditNoteView.js

// Import the data service to save the new note
import dataService from "../dataService.js";
// Import the router to navigate back to the list after saving
import router from "../router.js";

const htmlTemplate = /*html*/`
  <div class="edit-note-view">
    <h2>Write New Note</h2>
    
    <div class="form-group"> <label for="note-title">Title: </label>
      <input type="text" id="note-title" v-model="inputTitle" placeholder="Enter title here..." class="input-title">
    </div>
    
    <div class="form-group"> <label for="note-content">Content: </label><br>
      <textarea 
        id="note-content" 
        rows="10" 
        cols="40" 
        v-model="inputContent"
        placeholder="Write your thoughts..."
        class="input-content">
      </textarea>
    </div>
    
    <button @click="saveNote" class="save-button">Save Note</button>
    
    <br><br>
    
    <router-link to="/notes" class="back-link"> &lt;-- Back to list</router-link>
  </div>
`;

export default {
  template: htmlTemplate,
  // Define reactive variables to store user input
  data() {
    return {
      inputTitle: '',   // Stores the title text
      inputContent: ''  // Stores the content text
    }
  },
  methods: {
    /**
     * Handles the logic when the "Save Note" button is clicked.
     */
    saveNote() {
      // 1. Basic Validation: Check if inputs are empty
      if (this.inputTitle.trim() === '' || this.inputContent.trim() === '') {
        alert('Please enter both a title and content!');
        return; // Stop execution if invalid
      }

      // 2. Use the data service to save the note to Local Storage
      dataService.addNote(this.inputTitle, this.inputContent);

      // 3. Provide feedback to the user
      alert('Note saved successfully!');

      // 4. Programmatically navigate back to the notes list page
      router.push('/notes');
    }
  }
}