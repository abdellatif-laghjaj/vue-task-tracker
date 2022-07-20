<template>
  <button class="btn">{{ content }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String
  }
}
</script>

<style scoped>

</style>