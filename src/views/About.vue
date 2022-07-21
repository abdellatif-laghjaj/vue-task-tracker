<template>
  <div class="app">
    <header>
      <h1>
        <router-link to="/">
          Todo List
        </router-link>
      </h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>
        2020 © All rights reserved.
      </p>
      <router-link to="/about">
        About
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>