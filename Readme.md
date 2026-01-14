# Final Submission: My Note App (Task 4)
## Task 4: Final Prototype & User Stories
**Goal:** Implement the 6 most important user stories and ensure accessibility.

I have fully implemented the following **6 User Stories** to complete the application prototype:

### 1. View Note List
- **User Story:** As a user, I want to see a list of all my notes so that I can get an overview.
- **Implementation:** dynamic rendering using `v-for` in `NoteListView.js`.

### 2. View Note Details
- **User Story:** As a user, I want to click on a note to read its full content.
- **Implementation:** Dynamic routing (`/note-detail/:id`) in `NoteDetailView.js`.

### 3. Create Note
- **User Story:** As a user, I want to create a new note to save my thoughts.
- **Implementation:** Input form with `v-model` binding in `EditNoteView.js`.

### 4. Edit Note
- **User Story:** As a user, I want to edit an existing note to correct mistakes or add information.
- **Implementation:** Reuses `EditNoteView.js` with an ID parameter to load existing data.

### 5. Delete Note
- **User Story:** As a user, I want to delete a note that is no longer needed.
- **Implementation:** "Delete" button in the detail view with a confirmation dialog.

### 6. Search Notes
- **User Story:** As a user, I want to search for notes by keywords.
- **Implementation:** Real-time filtering in `SearchView.js` based on title and content.

### Extra Feature: Settings
- **User Story:** As a user, I want to customize the app's appearance.
- **Implementation:** Added **Dark Mode** and **Font Size Control** in `SettingsView.js`. These preferences are saved in `localStorage`.

---

## Task 3: Styling & Responsive Design
**Goal:** Implement navigation and style components using CSS.

* **Navigation:** Implemented a **Bottom Navigation Bar** (Mobile-first approach) as suggested in Lecture 3.
* **CSS Architecture:** Used `css/main.css` for global styles.
* **Responsive Design:** The layout adapts to screen sizes using Flexbox (`display: flex`).
* **Theming:** Implemented CSS classes (`.dark-mode`, `.font-large`) to support the Settings feature.

---

## Task 2: Interactivity & Data Persistence
**Goal:** Implement basic functionality and data storage.

* **Data Service:** Created `dataService.js` to handle all **CRUD** (Create, Read, Update, Delete) operations.
* **Local Storage:** All notes and user settings are stored in the browser's `localStorage` (Lesson 2 concept), so data persists even after refreshing the page.
* **Vue.js Directives:** Used `v-if` for conditional rendering (e.g., "No results found") and `v-for` for lists.

---

## Task 1: App Structure (Archive)
**Goal:** Define component structure based on the UX Prototype.

**Project Structure:**
* `App.js`: The main entry point and layout wrapper.
* `router.js`: Handles client-side routing between views.
* `components/`: Reusable UI parts (e.g., `NoteListItem.js`, `SearchBar.js`).
* `views/`: Page-level components (e.g., `HomeView.js`, `NoteListView.js`).

---

## Accessibility Tests (NVDA)
Following the course guidelines (Lesson 2 & 4), I tested the application using the **NVDA Screen Reader**.

* **Semantic HTML:** Used `<nav>`, `<header>`, `<main>`, `<button>` tags for better screen reader navigation.
* **Labels:** All inputs have associated `<label>` elements.
* **Hidden Text:** Used `.sr-only` class to provide text for screen readers that is visually hidden (e.g., for navigation icons).
* **Focus Management:** The "Skip to main content" logic is implicitly handled by the clear document structure.