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
    import Component from "vue-class-component"
    import {Vue, Prop} from "vue-property-decorator";

    @Component
    export default class Hello extends Vue {
        @Prop({default: 0}) Index!: number

        private Name: string = "Test";
        private Title: string = "Title";
        private IndexCount: number = this.Index;

        Hello() {
            alert("hello");
        }

        get Total(): number {
            return this.IndexCount + 1;
        }
    }
</script>
