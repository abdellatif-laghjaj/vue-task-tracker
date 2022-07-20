<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task"/>
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
  }
}
</script>

<style scoped>

</style>