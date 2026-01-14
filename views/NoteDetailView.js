// views/NoteDetailView.js

import dataService from "../dataService.js";
import router from "../router.js"; // Needed for redirection after delete

const htmlTemplate = /*html*/`
  <div>
    <div v-if="note">
      <h2>{{ note.title }}</h2>
      <small class="note-date">{{ note.date }}</small>
      <hr />
      
      <p style="white-space: pre-wrap; margin-top: 20px; line-height: 1.6;">{{ note.content }}</p>

      <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
        
        <router-link :to="'/edit-note/' + note.id">
           <button class="save-button" style="background-color: #2196F3; margin-right: 10px;">Edit Note</button>
        </router-link>

        <button @click="deleteNote" class="save-button" style="background-color: #f44336;">Delete Note</button>
      </div>
    </div>

    <div v-else>
      <h2>Note not found</h2>
      <p>The note you are looking for does not exist.</p>
    </div>

    <br><br>
    <router-link to="/notes" style="color: #3f51b5; font-weight: bold;"> &lt;-- Back to list</router-link>
  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      note: null
    }
  },
  mounted() {
    const noteId = this.$route.params.id;
    this.note = dataService.getNoteById(noteId);
  },
  methods: {
    // Handle note deletion
    deleteNote() {
      // Confirm before deleting (Good UX)
      if (confirm("Are you sure you want to delete this note?")) {
        dataService.deleteNote(this.note.id);
        alert("Note deleted.");
        // Redirect back to the list
        router.push('/notes');
      }
    }
  }
}