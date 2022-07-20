<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @click="addTask" text="Add" color="#3AB4F2"/>
  </header>
</template>

<script>

import Button from "@/components/Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Task Tracker"
    }
  },
  components: {
    Button
  },
  methods: {
    addTask() {
      alert("Add Task")
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>