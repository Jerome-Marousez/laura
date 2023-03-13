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
        v-if="$route.params.id !== 'truck'"
        @click="$router.push('truck')"
    >
      go from this route with an id to the same route with a different id that is = truck
    </button>

    <br>
    <br>
<!--  don't use <br> tags like I just did ^_^  -->
    <br>
    <br>
    <div v-if="$route.params.id !== 'truck'">
      <div>this data comes from the App.js file and did not have to be passed on via props</div>
      <div>it is the result of doing <b>stores.restaurant</b> manually</div>
      <pre>{{stores.restaurant}}</pre>
    </div>

    <div v-else>
      <div>This is the data from App.js still</div>
      <div>This time I used: <b>stores[$route.params.id]</b></div>
      <div>Which is the equivalent of doing: <b>stores['truck']</b> or <b>stores.truck</b></div>
      <pre>{{ stores[$route.params.id] }}</pre>

      <br>
      <div>As you can see, if you name your path or even the parameter based on your data</div>
      <div>Each page can have a lot in common with other pages but have some unique data</div>
      <div>All the data coming from one place</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComplexRouteView',

  // this is where the magic happens. Inject will take the data that is provided somewhere else
  //  in our case, it gets stores from App.js
  inject: ['stores'],

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
