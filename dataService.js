// dataService.js

const STORAGE_KEY = 'my-note-app-data';

export default {
  /**
   * Retrieve all notes from Local Storage.
   */
  getNotes() {
    const jsonString = localStorage.getItem(STORAGE_KEY);
    return jsonString ? JSON.parse(jsonString) : [];
  },

  /**
   * Save the current list of notes.
   */
  saveNotes(notes) {
    const jsonString = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, jsonString);
  },

  /**
   * Add a new note.
   */
  addNote(title, content) {
    const notes = this.getNotes();
    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
    };
    notes.push(newNote);
    this.saveNotes(notes);
  },

  /**
   * [NEW FUNCTION] Find a specific note by its ID.
   * This is used for the Note Detail View.
   * @param {Number} id - The unique ID of the note to find
   */
  getNoteById(id) {
    const notes = this.getNotes();
    // Use the array .find() method to locate the note with the matching ID
    // We confirm the ID types match (converting string ID to number if necessary)
    return notes.find(note => note.id == id);
  }
};