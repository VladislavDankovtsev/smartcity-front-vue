<template>
  <q-layout view="lHh Lpr lFf">
    <Header></Header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header'

export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">

</style>
