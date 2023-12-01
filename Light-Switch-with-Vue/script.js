Vue.createApp({
  data() {
    return {};
  },
  methods: {
    daynight(event) {
      if (document.title === "Good Morning") {
        document.title = "Good Night";
      } else {
        document.title = "Good Morning";
      }
      document.body.classList.toggle("dark");
      event.target.classList.toggle("day");
      event.target.classList.toggle("night");
    },
  },
}).mount("#app");
