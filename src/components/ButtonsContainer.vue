<template>
  <div class="container">
    <div v-for="route in myRoutes">

      <button @click="goToPageVerbose(route.value)">
        <span>{{ route.name }}</span>
        <span>click here to get to this route with id: {{ route.value }}</span>
      </button>

    </div>

    <button @click="goToPageCondensed(456)">the other way of doing things</button>

    <br>

    <div>The dynamic routes above will make sense by looking at the code first.</div>
    <div>The nested routes below are easy to grasp when looking at the router/index.js file but easier to understand in action.</div>

    <br>

    <button @click="$router.push({ name: 'parent' })">go to nested routes</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  },
  data() {
    return {
      myRoutes: {
        0: {
          name: 'the first route',
          value: '123',
        },
        1: {
          name: 'the second route',
          value: '456',
        },
        2: {
          name: 'the third route',
          value: '789',
        },
      }
    }
  },

  methods: {
    goToPageVerbose(id) {
      this.$router.push({ name: 'my-named-route-with-params', params: { id: id } })


      // both methods do the same thing, I tend to prefer this one but there is no wrong choice
      // if you had more params, it would look like this:
      // this.$router.push({ name: 'my-route-with-params', params: { id: 123, fullName: 'John Doe', phone: '0 123 456 789' } })
      // your route would look like this: /name-of-my-route/123/John Doe/0 123 456 789

      //
      // and on their respective page, you can get access to each parameter like so:
      // $route.params.id / $route.params.fullName / $route.params.phone
      // as these will be shown in the URL, you should not use URL params to pass araound sensitive data

    },


    goToPageCondensed(id) {
      this.$router.push(`path-of-my-choosing/${id}`)


      // this.$router.push(`my-route-with-params/${id}`) <- this will not work

      // notice that this time, I did not reference the name of the route but the path
      // no matter which one you'll use, it's always the path that will show up in the URL

      // note that the following will not work:
      // this.$router.push({ path: 'path-of-my-choosing', params: { id: id } })
      // you'd get this warning: 'Path "path-of-my-choosing" was passed with params but they will be ignored. Use a named route alongside params instead.'

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 500px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem
}
button {
  width: 100%;
  padding-block: .3rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
