import Vue from 'vue'
import task from './task.js';
import draggable from "vuedraggable";

Vue.component('todo-area', {
  props: ['todos'],
  components: {
    draggable
  },
  template: `
    <ul class="list js-list">
      <draggable tag="ul">
        <div 
          v-for="todo in todos"
          :key="todo.id"
          v-if="todo.deleteFlg">
          <li class="list__item" :class="{'list__item--done':todo.doneFlg}" v-show="todo.showFlg">
            <i class="fa" aria-hidden="true" @click.prevent="toggleDone(todo)"
            :class="{'fa-square-o':!todo.doneFlg, 'fa-check-square':todo.doneFlg, 'icon-check':todo.doneFlg,}"></i>
            <span class="editTextZone" @mouseover.prevent="editTask(todo)" v-show="!todo.editFlg">　{{todo.title}}</span>
            <input type="text" class="editText" value="タスク1a" v-show="todo.editFlg" @mouseout="editTask(todo)" v-model="todo.title">
            <i class="fa fa-trash icon-trash" aria-hidden="true" @click="remove(todo)"></i>
          </li>
        </div>
      </draggable>
    </ul>
  `,

  data: function(){
    return {
      //
    }
  },
  watch: {
    //検索処理
    // search: function(){
    //   console.log(this.todos);
    //   // if(this.todos.)
    // }
  },

  methods: {
    //done処理
    toggleDone: function(todo){
      //フラグ切り替え
      todo.doneFlg = !todo.doneFlg;
    },

    //削除処理
    remove: function(todo){
      // this.todos.splice(todo, 1);
      // this.todos.splice(todo.id, 1);
      //配列にdeleteFlgを追加しv-ifで管理する方式に変更
      todo.deleteFlg = !todo.deleteFlg;
    },

    //編集処理
    editTask: function(todo){
      todo.editFlg = !todo.editFlg;
    },
    //後で消す
    sample: function(todo){
      console.log(todo.id);
    },
  }
  // computed: {
  //   searchTask: function(){
  //     console.log(this.search);
  //   }
  // }

})
