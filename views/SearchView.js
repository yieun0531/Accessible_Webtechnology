// views/SearchView.js (예시 구조)
import SearchBar from '../components/SearchBar.js';
import dataService from '../dataService.js';
import NoteListItem from '../components/NoteListItem.js';

const htmlTemplate = /*html*/`
  <div class="search-view">
    <h1>Search Results</h1>
    
    <SearchBar @search-triggered="handleSearch" />

    <div class="results-list">
      <NoteListItem 
        v-for="note in filteredNotes" 
        :key="note.id" 
        :note="note" 
      />
      
      <p v-if="filteredNotes.length === 0">No notes found.</p>
    </div>
  </div>
`;

export default {
  components: { SearchBar, NoteListItem },
  template: htmlTemplate,
  data() {
    return {
      allNotes: [],      // 전체 데이터
      filteredNotes: []  // 검색 결과 데이터
    };
  },
  mounted() {
    // 초기 데이터 로드 (dataService 활용)
    this.allNotes = dataService.getAllNotes();
    this.filteredNotes = this.allNotes; // 처음엔 전체 표시
  },
  methods: {
    // 3. 자식이 보낸 searchQuery를 처리하는 함수
    handleSearch(query) {
      if (!query) {
        this.filteredNotes = this.allNotes;
        return;
      }
      
      const lowerQuery = query.toLowerCase();
      this.filteredNotes = this.allNotes.filter(note => {
        return (
          note.title.toLowerCase().includes(lowerQuery) || 
          note.content.toLowerCase().includes(lowerQuery)
        );
      });
    }
  }
};