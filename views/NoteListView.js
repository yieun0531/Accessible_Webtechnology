// views/NoteListView.js

// 1. Import the NoteList component we created in step 2.
import NoteList from "../components/NoteList.js";

// 2. This is the template for the 'Note List Page'.
const htmlTemplate = /*html*/`
  <div>
    <NoteList />
  </div>
`;

export default {
  template: htmlTemplate,
  // 3. Register the NoteList component for use within this view.
  components: {
    NoteList
  }
}