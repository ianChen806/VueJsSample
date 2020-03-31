<template>
    <div>
        <h1>{{Title}}</h1>
        <h2>{{Name}}</h2>
        <label>
            Input
            <input v-model="Name" type="text">
        </label>
        
        <button v-on:click="Hello">Button</button>
        <p>{{Total}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"

    export default Vue.extend({
        props: ["Index"],

        data() {
            return {
                Name: "Test",
                Title: "Title",
                Index: this.Index,
            }
        },

        methods: {
            Hello() {
                alert("hello");
            }
        },

        computed: {
            Total(): number {
                return this.Index + 1;
            }
        }
    })
</script>
