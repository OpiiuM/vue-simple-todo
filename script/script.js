const app = {
    data() {
        return {
            preloader: true,
            title: "Vue Todo App",
            task: "",
            notes: JSON.parse(localStorage.getItem("notes") || "[]"),
        }
    },
    mounted() {
        setTimeout(() => {
            this.preloader = false
        }, 500)
    },
    methods: {
        addNote() {
            if (this.task !== "" && !this.notes.includes(this.task.trim())) {
                this.notes.push(this.task.trim())
                localStorage.setItem("notes", JSON.stringify(this.notes))
                this.task = ""
            }
        },
        removeAll() {
            const lengt = this.notes.length
            this.notes.splice(0, lengt)
            localStorage.clear()
        },
        removeOne(i) {
            this.notes.splice(i, 1)
            localStorage.setItem("notes", JSON.stringify(this.notes))
        }
    },
}

Vue.createApp(app).mount("#app")