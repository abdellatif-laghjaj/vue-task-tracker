<template>
  <header>
    <h1>{{ title }}</h1>
    <Button :text="showAddTask ? 'Close' : 'Add'"
            :color="showAddTask ? '#FF0063' : '#3AB4F2'"
            @btn-click="$emit('toggle-add-task')"/>
  </header>
</template>

<script>

import Button from "@/components/Button";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean
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