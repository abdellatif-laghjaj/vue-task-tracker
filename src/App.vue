<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <Tasks :tasks="tasks"/>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Tasks from "@/components/Tasks";

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: [],
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        title: "Task 1",
        day: "March 1st at 10:00 AM",
        reminder: true,
      },
      {
        id: 2,
        title: "Task 2",
        day: "March 1st at 10:00 AM",
        reminder: true,
      },
      {
        id: 3,
        title: "Task 3",
        day: "March 1st at 10:00 AM",
        reminder: true,
      },
      {
        id: 4,
        title: "Task 4",
        day: "March 1st at 10:00 AM",
        reminder: true,
      },
      {
        id: 5,
        title: "Task 5",
        day: "March 1st at 10:00 AM",
        reminder: true,
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
