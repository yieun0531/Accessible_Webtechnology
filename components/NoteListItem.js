// components/NoteListItem.js

const htmlTemplate = /*html*/`
  <router-link 
    :to="'/note-detail/' + note.id" 
    class="note-link"> <div class="note-list-item"> 
      <h3 class="note-title">{{ note.title }}</h3>
      <p class="note-content-preview">{{ note.content }}</p>
      <small class="note-date">Created on: {{ note.date }}</small>
    </div>
  </router-link>
`;

export default {
  template: htmlTemplate,
  props: ['note']
}