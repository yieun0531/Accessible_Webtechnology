// dataService.js

const STORAGE_KEY = 'my-note-app-data';
const SETTINGS_KEY = 'my-note-app-settings';

export default {
  // --- Note Management Functions ---

  /**
   * Retrieve all notes from Local Storage.
   * Returns an empty array if no data exists.
   */
  getNotes() {
    const jsonString = localStorage.getItem(STORAGE_KEY);
    return jsonString ? JSON.parse(jsonString) : [];
  },

  /**
   * Save the current list of notes to Local Storage.
   * @param {Array} notes - The array of note objects
   */
  saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  },

  /**
   * Create a new note and add it to the list.
   * @param {String} title 
   * @param {String} content 
   */
  addNote(title, content) {
    const notes = this.getNotes();
    const newNote = {
      id: Date.now(), // Use timestamp as unique ID
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
    };
    notes.push(newNote);
    this.saveNotes(notes);
  },

  /**
   * Find a specific note by its unique ID.
   * @param {Number|String} id 
   */
  getNoteById(id) {
    const notes = this.getNotes();
    // Use loose equality (==) to handle both string and number IDs
    return notes.find(note => note.id == id);
  },

  /**
   * Update the title and content of an existing note.
   */
  updateNote(id, title, content) {
    const notes = this.getNotes();
    const index = notes.findIndex(note => note.id == id);
    
    if (index !== -1) {
      notes[index].title = title;
      notes[index].content = content;
      // Note: We maintain the original creation date
      this.saveNotes(notes);
    }
  },

  /**
   * Delete a note permanently by its ID.
   */
  deleteNote(id) {
    let notes = this.getNotes();
    // Filter out the note that matches the given ID
    notes = notes.filter(note => note.id != id);
    this.saveNotes(notes);
  },

  // --- Settings Management Functions ---

  /**
   * Retrieve user settings (Dark Mode, Font Size).
   * Returns default settings if none exist.
   */
  getSettings() {
    const jsonString = localStorage.getItem(SETTINGS_KEY);
    // Defaults: Dark Mode = off, Font Size = medium
    return jsonString ? JSON.parse(jsonString) : { darkMode: false, fontSize: 'medium' };
  },

  /**
   * Save settings to Local Storage and apply them immediately.
   * @param {Object} settings 
   */
  saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    this.applySettings(); // Apply changes to the DOM instantly
  },

  /**
   * Apply the current settings to the HTML <body> tag.
   * This handles the CSS class toggling for global styles.
   */
  applySettings() {
    const settings = this.getSettings();
    const body = document.body;

    // Apply Dark Mode class
    if (settings.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    // Apply Font Size class (remove old ones first to prevent conflicts)
    body.classList.remove('font-small', 'font-medium', 'font-large');
    body.classList.add(`font-${settings.fontSize}`);
  }
};