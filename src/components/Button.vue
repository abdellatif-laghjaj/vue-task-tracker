<template>
  <button :style="{backgroundColor: color}"
          class="btn" @click="onClick">{{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      this.$emit('toggle-add-task')
    }
  }
}
</script>

<style scoped>

</style>