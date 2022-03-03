const app = Vue.createApp({
  // Data or functions to react to events
  // Setup for template for rendering to the DOM
  data() {
    return {
      title: "New Book Title",
      author: "Book Author",
      age: "Author Age",
    };
  },
});

app.mount("#app");
