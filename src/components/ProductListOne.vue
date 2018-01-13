<template>
    <div id="product-list-one">
        <h2>Product list one</h2>
        <ul>
            <li v-for="item in saleProducts">{{item.name}}<span> Price: {{item.price}}</span></li>
        </ul>
        <button v-on:click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
        // saleProducts(){
        //     var saleProducts = this.$store.state.products.map(product=>{
        //         return{
        //             name: '***' + product.name + '***',
        //             price: product.price/2
        //         }
        //     });
        //     return saleProducts;
        // }
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice: function(){
            // this.$store.state.products.forEach(product =>{
            //     product.price -= 1;
            // })
            //return this.$store.commit('reducePrice'); //commit mutations
            return this.$store.dispatch('reducePrice');
        }
    }
}
</script>

<style>
</style>
