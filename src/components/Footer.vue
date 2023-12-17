<template>
  <footer>
    <div>
      <nav>
        <router-link to="/contact">Contact us</router-link>
      </nav>
      <p>Group S©</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding-top: .2em;
  padding-bottom: .2em;
  margin-left: -8px;
  background-color: rgba(176, 176, 176, 0.77);
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  align-items: center;
  flex-direction: row;
}

p {
  font-size: 90%;
  margin: 10px;
}
</style>
<script setup>
</script>