import Vue from 'vue'
import input from './input';
import todo from './todo';
import search from './search';
// import task from './task';
// import draggable from "vuedraggable";



Vue.component('main-area', {
  props: [''],
  data: function(){
    return {
      sample1: 'aaa',
      inputText: '',
      search: '',
      todos: [
        //サンプル用
        {
          id: 0,
          title: 'サンプル0',
          doneFlg: false,
          editFlg: false,
          showFlg: true,
          deleteFlg: true,
        },
        {
          id: 1,
          title: 'サンプル1',
          doneFlg: true,
          editFlg: false,
          showFlg: true,
          deleteFlg: true,
        },
        //
      ]
    }
  },
  template: `
<!--    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js"></script>-->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.20.0/vuedraggable.umd.min.js"></script>-->
    <main class="main">
      <h1 class="mainTitle">TODOs</h1>
      <input-area @textMessage="addTodo"></input-area>
      <search-area @searchTask="searchTask"></search-area>
      <todo-area :todos="this.todos"></todo-area>
    </main>
  `,
  methods: {
    addTodo: function(text){
      this.inputText = text;
      //配列に詰める
      this.todos.push({id: this.randomId(), title: this.inputText, doneFlg: false, editFlg: false, showFlg: true, deleteFlg: true});
    },
    //idの乱数を生成
    randomId: function(){
      let min = 0;
      let max = 9999;
      return Math.floor(Math.random()*(max - min));
    },

    //検索処理の中継
    // searchTask: function(search){
    //   // this.search = search;
    //   // for(let todo in this.todos){
    //   console.log(aaa);
    //
    //   // this.todos.forEach(function(todo){
    //   todo.showFlg = true;
    //
    //   let regExp = new RegExp('^' + search);
    //
    //   if (todo.title && todo.title.match(regExp)){
    //     return true;
    //   }
    //
    //   todo.showFlg = false;
    // }
    //検索処理
    searchTask: function(search){
      //検索窓でキーアップされるごとに実行される
      console.log(search);
      this.todos.forEach(function(todo){
        todo.showFlg = true;

        //searchとtodoオブジェクトのタイトルを比較させる
        let regExp = new RegExp('^' + search);

        if(todo.title && todo.title.match(regExp)){
          return true;
        }

        todo.showFlg = false;
      })


    }



  }
})

new Vue({
  el: '#main'
})