Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    test(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(fruit) {
      console.log(this.fruitBasket.indexOf(fruit));
      this.fruitBasket = this.fruitBasket.filter((item) => {
        if (item !== fruit) {
          return item;
        }
      });
    },
  },
}).mount("#app");
