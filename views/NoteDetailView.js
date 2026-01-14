// views/NoteDetailView.js

import dataService from "../dataService.js";

const htmlTemplate = /*html*/`
  <div>
    <div v-if="note">
      <h2>{{ note.title }}</h2>
      <small style="color: grey;">{{ note.date }}</small>
      <hr />
      
      <p style="white-space: pre-wrap; margin-top: 20px;">{{ note.content }}</p>
    </div>

    <div v-else>
      <h2>Note not found</h2>
      <p>The note you are looking for does not exist.</p>
    </div>

    <br><br>
    <router-link to="/notes"> &lt;-- Back to list</router-link>
  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      note: null // Initially null, will be populated in mounted()
    }
  },
  mounted() {
    // 1. Get the 'id' from the URL parameters (e.g., /note-detail/123 -> id is 123)
    const noteId = this.$route.params.id;

    // 2. Fetch the specific note data using our service
    this.note = dataService.getNoteById(noteId);
  }
}