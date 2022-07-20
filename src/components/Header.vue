<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @click="addTask" text="Add" color="#3AB4F2" @toggle-add-task="$emit('toggle-add-task')"/>
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