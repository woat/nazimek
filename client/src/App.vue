<template>
  <div id="app">
    <navbar/>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        >
        <router-view/>
      </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
