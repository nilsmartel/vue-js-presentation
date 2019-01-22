new Vue({
    el: "#vueForm",
    data: {
        name: "Hannover JS",
        currentTime: new Date().toString()
    },

    // This Method gets called on start up
    mounted() {
        // Update `currentTime` once a second
        setInterval(() => {
            this.currentTime = new Date().toString()
        }, 1000)
    }
})
