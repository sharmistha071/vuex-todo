<template>
    <div id="todo-list">
        <h2>Todo Lists</h2>
        <form @submit.prevent="addTodo">
            <input type="text" placeholder="Please enter a task" v-model="task">
        </form>
        <ul>
            <li v-for="item in todos">
                <input type="checkbox" @click="toggoleTodo(item.id)"><span v-bind:class="{completed:item.completed}">{{item.task}}</span>
                <button @click="deleteTodo(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        todos(){
            return this.$store.state.todos;
        },
        generateId(){
            return this.newId = this.$store.state.todos.length;
        }
    },
    data: function(){
        return {
            task: "",
            newId: null
        }
    },
    methods: {
        addTodo: function() {
            this.$store.dispatch("addTodo", this);
            this.task = "";
        },
        toggoleTodo: function(id){
            this.$store.dispatch("toggoleTodo", id);
        },
        deleteTodo: function(id){
            this.$store.dispatch("deleteTodo", id);
        }
    }
}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
    color: #555;
}
ul{
    list-style-type: none;
}
</style>
