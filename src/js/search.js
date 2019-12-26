import Vue from 'vue'

Vue.component('search-area', {
  props: [''],
  data: function(){
    return {
      search: '',
    }
  },
  template: `
      <div class="searchBox">
        <i class="fa fa-search searchBox__icon" aria-hidden="true"></i>
        <input type="text" class="searchBox__input" placeholder="検索してください" @keyup="searchTask()" v-model="search">
      </div>
  `,
  methods: {
    //検索に入力されたのを親に渡す
    searchTask: function(){
      this.$emit('searchTask', this.search);
    }
  }
})