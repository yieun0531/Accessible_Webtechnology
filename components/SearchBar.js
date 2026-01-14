const htmlTemplate = /*html*/`
  <div class="search-bar-container" style="margin: 10px 0;">
    <label for="search-input" style="display: block; margin-bottom: 5px;">Search Notes:</label>
    
    <input 
      type="search" 
      id="search-input" 
      v-model="searchQuery" 
      placeholder="find a note..."
      @keyup.enter="emitSearch"
    >
    
    <button @click="emitSearch">Search</button>
  </div>
`;

export default {
  template: htmlTemplate,
  // 4. 검색어를 저장할 데이터 정의
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    // 5. 부모 컴포넌트(SearchView)로 검색어를 전달하는 함수
    emitSearch() {
      // 'search-triggered'라는 이름으로 현재 검색어를 보냄
      this.$emit('search-triggered', this.searchQuery);
    }
  }
}