// router.js

// 1. Import all our views (Home + 5 new ones)
import HomeView from './views/HomeView.js'
import NoteListView from './views/NoteListView.js'
import NoteDetailView from './views/NoteDetailView.js'
import EditNoteView from './views/EditNoteView.js'
import SearchView from './views/SearchView.js'
import SettingsView from './views/SettingsView.js' // <-- ADDED

// 2. Define the paths for all views
const routes = [
  { path: '/', component: HomeView },
  { path: '/notes', component: NoteListView },
  
  // [CHANGED] Add '/:id' to the path.
  // This tells Vue Router that 'id' is a dynamic parameter.
  { path: '/note-detail/:id', component: NoteDetailView },
  
  { path: '/edit-note', component: EditNoteView },
  { path: '/search', component: SearchView },
  { path: '/settings', component: SettingsView }
]

// (This is the standard Vue Router setup - leave as is)
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router