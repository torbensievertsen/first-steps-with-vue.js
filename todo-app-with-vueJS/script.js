Vue.createApp({
  data() {
    return {
      API: "http://localhost:4730/todos",
      todos: [],
      filter: "all",
      newTodo: "",
    };
  },
  created() {
    this.getTodosFromApi();
  },
  methods: {
    getTodosFromApi() {
      fetch(this.API)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then((todosfromApi) => {
          this.todos = todosfromApi;
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    changeCheckbox(todo) {
      fetch(this.API + "/" + todo.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then((updatedTodoFromApi) => {})
        .catch((error) => {
          alert(error.message);
        });
    },
    addTodo() {
      console.log("test");
      const newTodoObj = {
        description: this.newTodo,
        done: false,
      };
      this.newTodo = "";

      fetch(this.API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoObj),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then((newTodoFromApi) => {
          this.todos.push(newTodoFromApi);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    removeDoneTodos() {
      const deleteids = [];
      for (const todo of this.todos) {
        if (todo.done === true) {
          deleteids.push(this.removeformApi(todo.id));
        }
      }
      Promise.all(deleteids).then((values) => {
        if (values.indexOf(undefined) !== -1) {
          this.getTodosFromApi();
        }
      });
    },
    removeformApi(id) {
      return fetch(this.API + "/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then(() => {})
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  computed: {
    filterArray() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "open") {
        return this.todos.filter((obj) => {
          if (!obj.done) {
            return obj;
          }
        });
      }
      if (this.filter === "done") {
        return this.todos.filter((obj) => {
          if (obj.done) {
            return obj;
          }
        });
      }
    },
  },
}).mount("#app");
