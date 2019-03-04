
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: "A" },
      { text: "B" },
      { text: "C" }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Hello vue.js!"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello sh!"
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    gList: [
      { id: 1, text: 'Vegetables' },
      { id: 2, text: 'Cheese' },
      { id: 3, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

// Vue.component('todo-item2', {
//   props: ['title'],
//   template: '<li>{{ title }}</li>\
//   <button v-on:click="$emit(\'remove\')">X</button>'
// })

Vue.component('todo-item2', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var app8 = new Vue({
  el: "#app-8",
  data: {
    newTodoText: "",
    todos: [
      "A",
      "B",
      "C"
    ]
  },
  methods: {
    addTodo: function () {
      if (this.newTodoText) {
        this.todos.push(this.newTodoText);
        this.newTodoText = ""
      }
    }
  }
})

var app9 = new Vue({
  el: "#app-9",
  data: { 
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

var app10 = new Vue({
  el: "#app-10",
  data: {
    count: 0,
  },
})

var app11 = new Vue({
  el: "#app-11",
  methods: {
    say: function(msg) {
      alert(msg)
    } 
  }
})