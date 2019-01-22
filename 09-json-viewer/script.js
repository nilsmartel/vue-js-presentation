Vue.component('json-obj', {
    template: '#json-template',
    props: ['obj']
})

new Vue({
    el: "#vueForm",
    data: {
        jsonData: null,
        inputString: ""
    },

    watch: {
        inputString(value) {
            try { 
                this.jsonData = JSON.parse(value)
            } catch {
                this.jsonData = null
            }
        }
    }
})
