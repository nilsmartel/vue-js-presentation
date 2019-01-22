
class Person {
    constructor(name, profession, birthday, img) {
        this.name = name
        this.profession = profession
        this.birthday = birthday
        this.img = img
    }
}

Vue.component('person', {
    template: '#person-template',
    props: ['person']
})

new Vue({
    el: "#vueForm",
    data: {
        persons: {
            nicole: new Person(
                "Nicole", 
                "Designer",
                "01.01.1997",
                "female_01.png"
            ),
            robin: new Person(
                "Robin", 
                "Software Engineer",
                "10.11.1992",
                "male_01.png"
            ),
            mark: new Person(
                "Mark", 
                "Politician",
                "01.04.1989",
                "male_02.png"
            ),
            liss: new Person(
                "Liss", 
                "Student",
                "01.01.1999",
                "female_02.png"
            ),
            peter: new Person(
                "Peter", 
                "Student",
                "01.01.2002",
                "male_03.png"
            ),
        }
    }
})
