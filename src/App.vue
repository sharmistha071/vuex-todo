<template>
    <div id="app">
        <!-- <product-list-one></product-list-one>
        <product-list-two></product-list-two> -->
        <todo-list></todo-list>
    </div>
</template>

<script>
// import ProductListOne from './components/ProductListOne.vue';
// import ProductListTwo from './components/ProductListTwo.vue';
import TodoList from './components/todo/TodoList.vue';

export default {
    name: 'app',
    components: {
        // 'product-list-one': ProductListOne,
        // 'product-list-two': ProductListTwo,
        'todo-list': TodoList
    },
    data () {
        return {

        }
    }
}
</script>

<style>
</style>
