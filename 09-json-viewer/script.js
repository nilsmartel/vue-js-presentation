Vue.component('json-obj', {
    template: '#json-template',
    props: ['obj']
})

new Vue({
    el: "#vueForm",
    data: {
        jsonData: null,
        inputString: "",
        exampleData: {
            persons: [
                {name: "Hubert", age: 89},
                {name: "Petterson", age: 23},
                {name: "Marie", age: 17}
            ],
            someBoolean: true,
            otherBoolean: false,
            config: {
                onStartup: null,
                onSave: "rustfmt"
            }
        }
    },

    mounted() {
        this.jsonData = this.exampleData
        console.log(this.exampleData)
    },

    watch: {
        inputString(value) {
            try { 
                this.jsonData = JSON.parse(value)
            } catch {
                this.jsonData = this.exampleData
            }
        }
    }
})
