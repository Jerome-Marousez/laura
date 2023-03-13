<template>
  <div class="nested">
    <h1>Grand child</h1>
    <div>
      This route is named <b>{{ $route.name }}</b>
    </div>
    <br>
    <div>
      The path is <b>{{ $route.path }}</b>
    </div>
    <br>
    <div class="btn-container">
      <button @click="$router.push('/')">back to home page</button>
      <button @click="$router.go(-1)">back one step [router.go(-1)]</button>
      <button @click="$router.push({ name: 'second child'})">go to another child (second child)</button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'FirstChild',
  props: {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  max-width: 500px;
  width: 100%;
  padding-block: .3rem;
  cursor: pointer;
}
.btn-container {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: fit-content;
  gap: 1rem
}
</style>
