const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "",
    };
  },
  watch: {
    result(value) {
      console.log(value);
      if (value === "37" || value === "Too much!") {
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    checkNum() {
      if (this.counter === 0) {
        return (this.result = "Begin adding!");
      }
      if (this.counter < 37 && this.counter > 0) {
        return (this.result = "Not there yet");
      }

      if (this.counter > 37) {
        return (this.result = "Too much!");
      }

      if (this.counter === 37) {
        return (this.result = "37");
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
