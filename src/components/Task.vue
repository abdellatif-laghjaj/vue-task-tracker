<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.title }}
      <i class="fa-solid fa-trash-can"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
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
.fa-solid {
  color: #EB1D36;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid #3CCF4E;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>