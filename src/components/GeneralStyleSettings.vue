<template>

  <div class="general_options">
    <h1>General Style</h1>
    <div class="background_and_height">
      <v-text-field @input="update_heigth()" v-model="size.height" label="Heigth" color="light-blue lighten-5" type="number"></v-text-field>


      <v-menu offset-x :close-on-content-click="false">
        <div class="background_color" slot="activator">

          <div :style="{background : `${b_color}`}" class="color_box"></div>
          <h2 class="text_size1">Background</h2>

        </div>
        <v-card>
          <chrome-picker v-model="colors.background" />
        </v-card>
      </v-menu>
    </div>

    <div class="box_and_width">
      <v-text-field @input="update_width()" v-model="size.width" label="Width" color="light-blue lighten-5" type="number"></v-text-field>


      <v-menu offset-x :close-on-content-click="false">
        <div class="background_color" slot="activator">

          <div :style="{background : `${box_color}`}" class="color_box"></div>
          <h2 class="text_size1">Box</h2>

        </div>
        <v-card>
          <chrome-picker v-model="colors.box" />
        </v-card>
      </v-menu>
    </div>


  </div>
</template>

<script>
  import {
    Chrome
  } from 'vue-color'

  export default {
    name: 'GeneralStyleSettings',
    components: {
      'chrome-picker': Chrome,
    },
    data() {
      return {
        size: {
          height: parseFloat(this.$store.state.box.height),
          width: parseFloat(this.$store.state.box.height),
        },

        colors: {
          background: {
            rgba: {
              r: 74,
              g: 46,
              b: 111,
              a: 1,
            },
          },
          box: {
            rgba: {
              r: 255,
              g: 255,
              b: 255,
              a: 1
            }
          }
        },
      }
    },
    methods: {
      update_heigth() {
        this.$store.commit({
          type: 'update_height',
          size: `${this.size.height}px`
        })
      },

      update_width() {
        this.$store.commit({
          type: 'update_width',
          size: `${this.size.width}px`
        })
      },
    },

    computed: {
      b_color() {
        let color = this.colors.background.rgba
        let rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`

        this.$store.commit({
          type: 'background_color',
          color: rgba
        })

        return this.$store.state.color.background
      },
      box_color() {
        let color = this.colors.box.rgba
        let rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`

        this.$store.commit({
          type: 'box_color',
          color: rgba
        })

        return this.$store.state.box.background
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .general_options {
    margin: 0px auto;
    max-width: 95vw;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 60px; */
  }

  .color_box {
    border: 2px solid black;
    border-radius: 4px;
    width: 40px;
    height: 25px;
  }

  .background_color {
    display: grid;
    grid-template-columns: 40px auto;
    grid-gap: 1rem;
    align-items: flex-end;
  }

  .background_and_height,
  .box_and_width {
    display: grid;
    grid-template-columns: 75px 1fr;
    grid-gap: 1.5rem;
  }

  .text_size1 {
    font-size: 1.5rem;
  }
</style>