<template>
  <div class="container">
    <Header title="Task Tracker"
            @toggle-add-task="toggleAddTask"
            :showAddTask="showAddTask"/>
    <AddTask @add-task="addTask" v-show="showAddTask"/>
    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
  </div>
</template>

<script>

import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import Tasks from "@/components/Tasks";

export default {
  name: 'App',
  components: {
    Header,
    AddTask,
    Tasks
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    async deleteTask(id) {
      const task_title = this.tasks.find(task => task.id === id).title;
      if (confirm(`Are you sure you want to delete "${task_title}" ?`)) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE'
        });

        if (res.ok) {
          this.tasks = this.tasks.filter(task => task.id !== id);
        } else {
          alert('Error deleting task!');
        }
      }
    },
    toggleReminder(id) {
      // const target_task = this.tasks.find(task => task.id === id);
      // this.tasks.find(task => task.id === id).reminder = !target_task.reminder;
      this.tasks.map(task => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
      });
    },
    async addTask(task) {

      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });

      this.tasks.push(task);
      // this.tasks = [...this.tasks, task];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      return res.json();
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      return res.json();
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
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
