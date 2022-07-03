<script>
export default {
    data() {
        return {
            items: [],
            loading: true,
            counter: 1,
        }
    },
    methods: {
        counting() {
            setTimeout(() => {
                this.counter += 1
                this.counting()
            }, 1000);
        },
        deleteProduct(event) {
            let uri = 'http://127.0.0.1:8000/api/product/destroy/'+event.id
            this.items.splice(this.items.indexOf(event), 1)
            this.axios.delete(uri)
        },
        fetchProduct() {
            let uri = 'http://127.0.0.1:8000/api/product'
            this.axios.get(uri).then(response => {
                this.loading = false;
                this.items = response.data
            })
            .catch(e => {
                console.log(e.response)
            });
        }
    },
    created() {
        this.fetchProduct();        
        this.counting()
    }
}
</script>

<template>
    <RouterLink to="/create" class="btn btn-primary">Create</RouterLink>
    <table class="table table-striped table-hover">
        <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td colspan="5" class="text-center">Loading... ({{counter}})</td>
            </tr>
            <tr v-if="!items.length && loading == false">
                <td colspan="5" class="text-center">Data is empty</td>
            </tr>
            <tr v-for="item in items" v-bind:key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.description}}</td>
                <td>
                    <RouterLink :to="{name: 'edit', params: {id: item.id}}" class="btn btn-primary">Edit</RouterLink>
                    <button v-on:click="deleteProduct(item)" class="btn btn-danger mx-2">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>