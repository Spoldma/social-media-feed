<template>
  <a :href="'/apost/' + post.id">
    <div class="post">
      <div class="header">
        <p>{{ post.date }}</p>
      </div>
      <div class="post-content">
        <p>{{ post.body }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    post: Object // Receive a post object from the parent component
  },
  data() {

  },
  methods: {

  },
}
</script>

<style scoped>
.post {
  border-radius: 25px;
  border: 2px solid #2a2cc9;
  background-color: rgb(231, 231, 231);
  margin: 50px;
  width: 350px;
  padding: 20px;
  padding-bottom: 5px;
}

.header {
  margin-left: 30px;
  display: flex;
  align-items: center;
  gap: 170px;
}

.header img {
  width: 30px;
  height: 30px;
}

.image {
  width: 300px;
}

.like-count {
  position: relative;
  top: -8px;
  font-weight: bold;
  margin-left: 10px;
}

.like-button {
  background-image: url('/public/like.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: rgb(231, 231, 231);
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
}
.post .like-button:hover {
  background-image: url('/public/like_pink.png');
}
</style>
