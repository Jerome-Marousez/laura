<template>
  <div>
    <div>
      This route is named <b>{{ $route.name }}</b>
    </div>
    <br>
    <div>
      The path is <b>{{ $route.path }}</b>
    </div>
    <br>
    <div>
      the parameter 'id' is <b>{{ $route.params.id }}</b>
    </div>
    <br>
    <button
        v-if="$route.params.id !== 'could-be-anything'"
        @click="$router.push('could-be-anything')"
    >
      go from this route with an id to the same route with a different id
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComplexRouteView',
  props: {

  },

  created() {
    console.log(`now that I'm on this page, I can get the id ${this.$route.params.id} and make make an api call or something to get the data corresponding to this id`)
  }

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
</style>
