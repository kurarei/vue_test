import Vue from 'vue'

Vue.component('input-area', {
  props: [''],
  data: function(){
    return {
      text: '',
      inputText: '',
      isShow: false,
    }
  },
  template: `
    <form class="form" @submit.prevent="addTodo">
      <div class="inputArea">
        <input type="text" class="inputText" placeholder="ここに入力してください" v-model="text">
        <span class="error" v-if="isShow">入力が空です。</span>
      </div>
      <button type="button" class="btn" @click.prevent="addTodo">TODOを追加</button>
    </form>
  `,
  methods: {
    addTodo: function(){
      //入力が空の場合はエラーを表示する
      if (this.text === ''){
        this.isShow = true;
        return this.isShow;
      }

      //入力された文字を保存し、input部分を空にする
      this.inputText = this.text;
      this.text = '';

      //エラーメッセージを非表示に戻す
      this.isShow = false;
      //app.jsに入力されたものを渡す
      this.$emit('textMessage', this.inputText);
    },


  }
})

