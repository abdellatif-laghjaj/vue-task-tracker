<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" @delete-task="$emit('delete-task', task.id)"/>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: "Tasks",
  props: {
    tasks: Array
  },
  components: {
    Task,
  },
  emits: ['delete-task']
}
</script>

<style scoped>

</style>