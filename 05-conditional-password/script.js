let app = new Vue({
    el: "#vueForm",
    data: {
        password: ""
    },
    methods: {
        hasLowercaseLetters(text) {
            for (c of text)
                if (this.isLowercase(c))
                    return true
            return false
        },

        hasUppercaseLetters(text) {
            for (c of text)
                if (this.isUppercase(c))
                    return true
            return false
        },

        hasNumbers(text) {
            for (c of text)
                if (this.isNumber(c))
                    return true
            return false
        },

        hasSpecialCharacters(text) {
            for (c of text)
                if ((this.isLowercase(c) || this.isUppercase(c) || this.isNumber(c)) === false )
                    return true
            return false
        },

        isLowercase: c => c >= 'a' && c <= 'z',
        isUppercase: c => c >= 'A' && c <= 'Z',
        isNumber: c => c >= '0' && c <= '9'
    }
})
