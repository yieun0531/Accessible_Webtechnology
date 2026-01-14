// views/EditNoteView.js

import dataService from "../dataService.js";
import router from "../router.js";

const htmlTemplate = /*html*/`
  <div class="edit-note-view">
    <h2>{{ mode === 'edit' ? 'Edit Note' : 'Write New Note' }}</h2>
    
    <div class="form-group"> 
      <label for="note-title">Title: </label>
      <input type="text" id="note-title" v-model="inputTitle" placeholder="Enter title here..." class="input-title">
    </div>
    
    <div class="form-group"> 
      <label for="note-content">Content: </label><br>
      <textarea 
        id="note-content" 
        rows="10" 
        cols="40" 
        v-model="inputContent"
        placeholder="Write your thoughts..."
        class="input-content">
      </textarea>
    </div>
    
    <button @click="saveNote" class="save-button">
      {{ mode === 'edit' ? 'Update Note' : 'Save Note' }}
    </button>
    
    <br><br>
    
    <router-link to="/notes" class="back-link"> &lt;-- Cancel</router-link>
  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      mode: 'create', // 'create' or 'edit'
      noteId: null,   // Store ID if in edit mode
      inputTitle: '',
      inputContent: ''
    }
  },
  mounted() {
    // Check if there is an ID in the URL parameter
    const id = this.$route.params.id;
    
    if (id) {
      // [EDIT MODE] Load existing data
      this.mode = 'edit';
      this.noteId = id;
      const note = dataService.getNoteById(id);
      if (note) {
        this.inputTitle = note.title;
        this.inputContent = note.content;
      }
    } else {
      // [CREATE MODE] Default state
      this.mode = 'create';
    }
  },
  methods: {
    saveNote() {
      if (this.inputTitle.trim() === '' || this.inputContent.trim() === '') {
        alert('Please enter both title and content!');
        return;
      }

      if (this.mode === 'create') {
        // Create new
        dataService.addNote(this.inputTitle, this.inputContent);
        alert('Note Created successfully!');
      } else {
        // Update existing
        dataService.updateNote(this.noteId, this.inputTitle, this.inputContent);
        alert('Note Updated successfully!');
      }

      router.push('/notes');
    }
  }
}