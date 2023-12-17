<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/addpost">Add a post</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
nav {
  margin-left: -38px;
  background-color: rgba(176, 176, 176, 0.77);
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
<script setup>
</script>