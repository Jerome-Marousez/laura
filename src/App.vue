<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <router-view :key="$route.fullPath"/>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      storesData: {
        restaurant: {
          name: 'deli-cious',
          path: 'restaurant',
          picture: 'restaurantPic.png',
          logo: 'restaurant.svg',
          externalUrl: 'https://deli-cious.com',
          contact: {
            manager: {
              name: 'Jeff',
              email: 'jeff@delicious.com'
            },
            owner: {
              name: 'Janine',
              email: 'janine@delicious.com'
            },
          },
        },
        truck: {
          name: 'deli-cious on wheels',
          path: 'truck',
          picture: 'truckPic.png',
          logo: 'truck.svg',
          externalUrl: 'https://deli-cious-on-wheels.com',
          contact: {
            manager: {
              name: 'Bryan',
              email: 'bryan@delicious.com'
            },
            owner: {
              name: 'Janine',
              email: 'janine@delicious.com'
            },
          },
        },
      }
    }
  },

  provide() {
    return {
      stores: this.storesData
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nested {
  border: 1px solid rgba(0, 0, 0, .2);
  padding: 15px;
  background-color: hsla(240, 50%, 50%, .1);

}
</style>
