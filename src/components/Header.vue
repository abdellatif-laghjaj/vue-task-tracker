<template>
  <header>
    <h1>{{ title }}</h1>
    <Button content="Add"/>
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