<template>
    <form v-on:submit.prevent="storeProduct">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" autocomplete="off" v-model="product.name">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="text" class="form-control" id="price" autocomplete="off" v-model="product.price">
        </div>
        <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="quantity" autocomplete="off" v-model="product.quantity">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
        </div>
        <RouterLink to="/" class="btn btn-info">Back</RouterLink> 
        <button type="submit" class="btn btn-primary mx-3">Submit</button>
    </form>
</template>

<script>
export default {
    // components: {
    //     name: 'StoreProduct'
    // },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        storeProduct() {
            let uri = 'http://127.0.0.1:8000/api/product/store'
            this.axios.post(uri, this.product).then((response) => {
                this.$router.push({name: 'home'})
            })
        },
        createNew() {
            this.product = {}
        }
    }
}
</script>