// App.js

import router from './router.js'
const { createApp } = Vue

const htmlTemplate = /*html*/`
  <div id="app-container">
    <header>
      <h1>My Note App</h1>
    </header>
    
    <main class="content-area">
      <router-view></router-view>
    </main>

    <nav class="bottom-nav" aria-labelledby="main-nav">
      <h2 id="main-nav" class="sr-only">Main navigation</h2>
      <ul>
        <li class="nav-item">
          <router-link to="/">🏠 Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notes">📝 Notes</router-link>
        </li>
        
        <li class="nav-item write-note">
          <router-link to="/edit-note">✏️ Write</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/search">🔍 Search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings">⚙️ Settings</router-link>
        </li>
      </ul>
    </nav>
  </div>
`

// (This is the standard Vue App setup - leave as is)
const App = {
  template: htmlTemplate
}

createApp(App).use(router).mount('#app')