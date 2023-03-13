<template>
  <div class="nested">
    <h1>Parent</h1>
    <br>
    <div>As you will soon see, nested routes are truly nested...</div>
    <div>I would advise against using them entirely if possible.</div>
    <div>Play with it for a couple of minutes and you'll see why.</div>
    <br>
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
      <button @click="$router.push({ name: 'first child' })">go deeper</button>
    </div>
    <br>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ParentView',
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
