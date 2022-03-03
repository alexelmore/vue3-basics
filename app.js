const app = Vue.createApp({
  // Data or functions to react to events
  // Setup for template for rendering to the DOM
  data() {
    return {
      url: "https://www.google.com/",
      title: "New Book Title",
      author: "Book Author",
      age: 45,
      isMarried: true,
      showAge: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "Book 1",
          img: "/assets/one.png",
          isFav: true,
        },
        {
          title: "Book 2",
          img: "/assets/two.png",
          isFav: false,
        },
        {
          title: "Book 3",
          img: "/assets/three.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeAuthor(title) {
      this.author = title;
    },
    toggleShowAge() {
      this.showAge = !this.showAge;
    },
    handleEvent(e, custom) {
      console.log(e);
      if (custom) {
        console.log(custom);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
