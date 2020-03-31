import Vue from "vue"

new Vue({
    el: "#app",
    data: {
        message: "hello world.",
        name:"name"
    },
    methods: {
        Hello: function () {
            alert("hello");
        }
    },
    mounted : function(){
        console.log('Hello Webpack and Vue !');
    }
})
