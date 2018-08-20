<template>
  <v-app>
    <div class="options">
        <GeneralStyleSettings msg="Welcome to Your Vue.js App"/>
        <Border/>
        <BorderRadius />
        <BoxShadow />
    </div>

    <div :style="{background: this.$store.getters.background}" class="box">
        <Box/>
    </div>

  </v-app>
</template>

<script>
import GeneralStyleSettings from './components/GeneralStyleSettings.vue'
import Border from './components/Border.vue'
import BorderRadius from './components/BorderRadius.vue'
import Box from './components/Box.vue'
import BoxShadow from './components/BoxShadow.vue'

export default {
  name: 'app',
  components: {
    GeneralStyleSettings,
    Border,
    BorderRadius,
    BoxShadow,
    Box
  }
}
</script>

<style>

#app .options {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  height: 100vh;
  position: fixed;
  background: #42445a;
  color: white;
  width: 280px;
  box-shadow: rgb(255, 255, 255) 100px 0px 0px -98px;
}

#app .box{
  margin-left: 280px;
  display: grid;
  height: 100vh;
  align-content: center;
  justify-content: center;
}
</style>
