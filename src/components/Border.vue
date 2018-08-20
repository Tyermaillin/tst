<template>
  <div>
    <h1 class="center">Borders</h1>


    <div class="border_show">
      <div v-for="(border, index) in border_box.borders" :key="index">

        <div @click='add_active_class(index)'>
          <button ref="button" class="button1" @click='show_part = border.part'>{{ border.text }}</button>
        </div>

        <div class="tools" v-if="border.part == show_part">
          <v-slider @input="update_border(border.part, border.size, border.selected, border.color)" v-model="border.size" max="400"
            min="0"></v-slider>

          <v-text-field v-model="border.size" hide-details single-line class="mt-0" type="number"> </v-text-field>


          <v-select @input="update_border(border.part, border.size, border.selected, border.color)" v-model="border.selected" :items='border_box.options'
            item-text='value' label="Border Style">
          </v-select>

          <v-menu offset-x :close-on-content-click="false">
            <div class="border-color" slot="activator">

              <div :style="{background : `${border.color.hex}`}" class="border-color-box"></div>
              <h2>{{ border.text }}</h2>

            </div>
            <v-card>
              <chrome-picker @input="update_border(border.part, border.size, border.selected, border.color)" v-model="border.color" />
            </v-card>
          </v-menu>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {
    Chrome
  } from 'vue-color'

  export default {
    name: 'Border',
    components: {
      'chrome-picker': Chrome,
    },

    data() {
      return {
        show_part: 'border',
        border_box: {

          borders: [{
              part: 'border',
              text: 'All',
              size: '',
              selected: '',
              color: {
                hex: ''
              }
            },
            {
              part: 'border-bottom',
              text: 'B',
              size: '',
              selected: '',
              color: {
                hex: ''
              }
            },
            {
              part: 'border-left',
              text: 'L',
              size: '',
              selected: '',
              color: {
                hex: ''
              }
            },
            {
              part: 'border-right',
              text: 'R',
              size: '',
              selected: '',
              color: {
                hex: ''
              }
            },
            {
              part: 'border-top',
              text: 'T',
              size: '',
              selected: '',
              color: {
                hex: ''
              }
            }
          ],

          options: [{
              value: 'none'
            },
            {
              value: 'hidden'
            },
            {
              value: 'dotted'
            },
            {
              value: 'dashed'
            },
            {
              value: 'solid'
            },
            {
              value: 'double'
            },
            {
              value: 'groove'
            },
            {
              value: 'ridge'
            },
            {
              value: 'inset'
            },
            {
              value: 'outset'
            },
            {
              value: 'initial'
            },
            {
              value: 'inherit'
            }
          ]
        }
      }
    },

    methods: {
      add_active_class(index) {

        this.$refs.button.forEach(element => {
          element.classList.remove('active')
        });

        let button_selected = this.$refs.button[index]
        button_selected.classList.add('active')

      },

      update_border(part, size, selected, color) {

        let border_part = this.border_box.borders[0]
        if (part === 'border') {

          this.border_box.borders.forEach(element => {
            element.size = border_part.size
            element.selected = border_part.selected
            element.color = border_part.color
          });
        }
        this.$store.commit({
          type: 'update_border',
          value: part,
          size: `${size}px ${selected} ${color.hex}`
        })
      },

      default () {
        return {
          size: 8,
          selected: 'solid',
          color: '#0048BA',
        }
      }
    },

    mounted() {
      this.border_box.borders.forEach(element => {
        element.selected = this.default().selected
        element.size = this.default().size
        element.color.hex = this.default().color
      });
    }
  }
</script>

<style>
  .border_show {
    display: grid;
    justify-items: center;
    align-items: flex-end;
    grid-template-columns: repeat(5, 1fr);
    margin: 0px auto;
    width: 260px;
  }

  .tools {
    position: absolute;
    top: 270px;
    left: 10px;
    display: grid;
    grid-template-columns: 160px 60px;
    /* grid-gap: 1rem; */
    grid-column-gap: 1rem;
  }

  .border-color-box {
    height: 24px;
    width: 40px;
    border: 2px solid black;
    border-radius: 4px;
  }

  .border-color {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.75rem;
    align-items: center;
  }

  .button1 {
    display: inline-block;
    padding: 0.25em 1em;
    border: 0.1em solid #FFFFFF;
    margin: 0 0.2em 0.2em 0;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.2s;
  }

  .button1:hover,
  .button2:hover {
    color: #000000;
    background-color: #FFFFFF;
  }

  .button1:focus,
  .button2:focus {
    outline: none;
  }

  .center {
    margin-left: 10px;
    margin-bottom: 0.5rem;
  }

  .active {
    background: #6CE070;
    color: #000000 !important;
    font-size: 0.9rem;
  }
</style>