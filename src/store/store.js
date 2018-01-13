import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products: [
            {name:'watch', price: 40},
            {name:'pen', price: 10},
            {name:'book', price: 400},
            {name:'mug', price: 60},
        ],
        todos: [
            {
                id: 0,
                task: "Buy food at the supermarket.",
                completed: false
            },
            {
                id: 1,
                task: "Organize the living room.",
                completed: false
            },
            {
                id: 2,
                task: "Finish reading official documentation of vue.js",
                completed: false
            }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product=>{
                return{
                    name: '***' + product.name + '***',
                    price: product.price/2
                }
            });
            return saleProducts;
        },
        getTodos: state => {
            return state.todos;
        }
    },
    mutations: {
        reducePrice: state =>{
            state.products.forEach(product =>{
                product.price -= 1;
            })
        },
        addTodo: (state, payload) => {
            console.log(payload);
            var newTodo = {
                id: payload.newId,
                task: payload.task,
                completed: false
            }
            state.todos.unshift(newTodo);
        },
        toggoleTodo: (state, payload)=>{
            var item = state.todos.find(todo => todo.id ==payload);
            item.completed = !item.completed;
        },
        deleteTodo: (state, payload) => {
            var index = state.todos.findIndex(todo => todo.id == payload);
            state.todos.splice(index,1);
        }
    },
    actions: {
        reducePrice: context => {
            setTimeout(function(){
                context.commit('reducePrice');
            }, 2000)
        },
        addTodo: (context, payload) =>{
            context.commit("addTodo", payload)
        },
        toggoleTodo: (context, payload) => {
            context.commit("toggoleTodo", payload)
        },
        deleteTodo: (context, payload) => {
            context.commit("deleteTodo", payload)
        }
    }
})
