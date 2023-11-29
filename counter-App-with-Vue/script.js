Vue.createApp({
  data() {
    return {
      count: 0,
      number: 0,
    };
  },
  computed: {
    cssProps() {
      return {
        "--counter": this.number + "%",
      };
    },
  },
  methods: {
    countup() {
      this.count++;
      this.number++;
      if (this.number > 100) {
        this.number = this.number - 100;
      }
    },
    onkeydown(e) {
      if (e.code === "Space" || e.code === "Enter") {
        this.countup();
      }
    },
  },
  created() {
    document.onkeydown = this.onkeydown;
  },
}).mount("#app");
