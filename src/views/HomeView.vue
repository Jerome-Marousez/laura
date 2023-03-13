<template>
  <div class="home">
    <ButtonsContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonsContainer from '@/components/ButtonsContainer.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonsContainer
  }
}
</script>
