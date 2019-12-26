// import Vue from 'vue'
//
// Vue.component('task-area', {
//   props: ['message'],
//   template: `
//     <li class="list__item">
//       <i class="fa fa-square-o" aria-hidden="true"></i>
//       <span class="">{{message}}</span>
//       <!--  <input type="text" class="editText" value="タスク1a" >-->
//       <i class="fa fa-trash icon-trash" aria-hidden="true"></i>
//     </li>
//   `,
//   data: function(){
//     return {
//       text: '',
//     }
//   },
//   // watch: {
//   //   inputText2(){
//   //     this.sample();
//   //     console.log(this.inputText2);
//   //   }
//   // },
//   // methods: {
//   //   sample: function(){
//   //     // console.log(this.inputText2);
//   //   }
//   // }
// })
//
// //通常タスク
// // <li class="list__item">
// //   <i class="fa fa-square-o" aria-hidden="true"></i>
// //   <span class="">タスク1</span>
// //   <!--  <input type="text" class="editText" value="タスク1a" >-->
// //   <i class="fa fa-trash icon-trash" aria-hidden="true"></i>
// // </li>
//
// //Doneタスク
// // <li class="list__item list__item--done">
// //   <i class="fa fa-check-square icon-check" aria-hidden="true"></i>
// //   <span class="">タスク2</span>
// //   <!--          <input type="text" class="editText " value="タスク2b">-->
// //   <i class="fa fa-trash icon-trash" aria-hidden="true"></i>
// // </li>