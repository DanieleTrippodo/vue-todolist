const { createApp } = Vue

createApp({
  data() {
    return {
        todos: [
            // ! Qui vanno tutti i Todos che creiamo
        ],
        newTodoText: ''
    };
},





// # funzioni VUE ------------------------------------------------------------------------------------------

methods: {
    
    addTodo() {
        if (this.newTodoText.trim() !== '') {
            this.todos.push({
                text: this.newTodoText,
                done: false
            });
            this.newTodoText = '';
        }
    },
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
}

}).mount('#app');