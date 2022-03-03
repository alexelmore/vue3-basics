const app = Vue.createApp({
  // Data or functions to react to events
  // Setup for template for rendering to the DOM
  data() {
    return {
      title: "New Book Title",
      author: "Book Author",
      age: 45,
      isMarried: true,
      showAge: true,
    };
  },
  methods: {
    changeAuthor(title) {
      this.author = title;
    },
    toggleShowAge() {
      this.showAge = !this.showAge;
    },
  },
});

app.mount("#app");
