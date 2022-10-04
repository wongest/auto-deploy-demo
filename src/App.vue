<template>
  <div>
    <ul>
      <li>2022-10-01 10:01</li>
      <li>2022-10-05 10:01</li>
    </ul>
    <div></div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
