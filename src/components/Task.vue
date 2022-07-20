<template>
  <h3>{{ task.title }}</h3>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  }
}
</script>

<style scoped>

</style>