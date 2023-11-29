const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
    };
  },
}).mount("#greeting");
const test = new Date();
const DateTime = Vue.createApp({
  data() {
    return {
      DateAndTime: test.toLocaleString("en-US"),
    };
  },
}).mount("#date_and_time");
