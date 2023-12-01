Vue.createApp({
  data() {
    return {
      numRed: 255,
      numGreen: 105,
      numBlue: 180,
    };
  },
  methods: {
    renderColor() {
      const main = document.querySelector("main");
      main.style.backgroundColor =
        "rgb(" + this.numRed + "," + this.numGreen + "," + this.numBlue + ")";
    },
  },
  computed: {
    hexNumber() {
      return (red =
        Number(this.numRed).toString(16) +
        Number(this.numGreen).toString(16) +
        Number(this.numBlue).toString(16));
    },
  },
}).mount("#app");
