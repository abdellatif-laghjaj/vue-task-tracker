<template>
  <form class="add-form" @submit="onSubmit">
    <div class="form-control">
      <label>Task</label>
      <input type="text" name="text" placeholder="Add Task" v-model="text"/>
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
          type="text"
          name="day"
          v-model="day"
          placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" name="reminder" v-model="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: '',
      day: '',
      reminder: false
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text || !this.day) {
        alert('Please enter a task!');
        return;
      }
      const newTask = {
        id: crypto.randomUUID(),
        title: this.text,
        day: this.day,
        reminder: this.reminder
      };
      this.text = '';
      this.day = '';
      this.reminder = false;

      this.$emit('add-task', newTask);
      alert(`Task "${newTask.title}" has been added!`);
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>