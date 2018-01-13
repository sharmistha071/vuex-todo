<template>
    <div id="product-list-two">
        <h2>Product list two</h2>
        <ul>
            <li v-for="item in products">{{item.name}}<span> Price: {{item.price}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.state.products;
        }
    }
}
</script>

<style>
</style>
