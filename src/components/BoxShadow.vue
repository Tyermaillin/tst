<template>
    <div class="box_shadow center">
        <h1>Box Shadow</h1>

        <div class="shadow">
            <v-menu offset-x :close-on-content-click="false">
                <div class="shadow-color" slot="activator">

                    <div :style="{background : `${update_color}`}" class="border-color-box"></div>
                    <h2>Color</h2>
                </div>
                <v-card>
                    <chrome-picker @input="update_boxshadow()" v-model="shadow.color" />
                </v-card>
            </v-menu>

            <button @click="update_boxshadow('remove')" class="button3">x</button>
        </div>

        <div v-if="shadow.color.hex" class="shadow-tools">
            <v-text-field label="Offset X" @input="update_boxshadow()" v-model.number="shadow.offsetx" class="mt-0" type="number"> </v-text-field>

            <v-text-field label="Offset Y" @input="update_boxshadow()" v-model.number="shadow.offsety" class="mt-0" type="number"> </v-text-field>

            <v-text-field min="0" label="Blur Radius" @input="update_boxshadow()" v-model.number="shadow.blurRadius" class="mt-0" type="number">
            </v-text-field>

            <v-text-field label="Spread Radius" @input="update_boxshadow()" v-model.number="shadow.spreadRadius" class="mt-0" type="number">
            </v-text-field>
        </div>
    </div>
</template>

<script>
    import {
        Chrome
    } from 'vue-color'

    export default {
        name: 'BoxShadow',
        components: {
            'chrome-picker': Chrome,
        },
        data() {
            return {
                shadow: {
                    offsetx: 2,
                    offsety: 2,
                    blurRadius: 2,
                    spreadRadius: 2,
                    color: {
                        rgba: {
                            r: '',
                            g: '',
                            b: '',
                            a: 1
                        }
                    }
                }
            }
        },
        computed: {
            update_color() {
                let rgba = this.shadow.color.rgba
                let rgba_color = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`

                if (!rgba.r && !rgba.g && !rgba.b && !rgba.a) {
                    return 'transparent'
                }

                return rgba_color
            }
        },

        methods: {
            update_boxshadow(prop) {

                let shadow = this.shadow
                let value

                for (let key in shadow) {
                    if (!shadow[key]) {
                        shadow[key] = 0
                    }
                }

                if (prop == 'remove') {

                    for (let key in shadow) {
                        if (typeof shadow[key] != 'object') {
                            shadow[key] = 0
                        }

                        if (typeof shadow[key] == 'object') {
                            shadow[key].hex = ''
                            let color_rgba = shadow[key].rgba
                            for (let color in color_rgba) {
                                color_rgba[color] = ''
                            }
                        }
                    }
                    value = ''
                } else {
                    value =
                        `${shadow.offsetx}px ${shadow.offsety}px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${this.update_color}`

                }
                this.$store.commit({
                    type: 'update_box_shadow',
                    value
                })
            }
        },
    }
</script>

<style>
    .box_shadow {
        margin-top: 6rem;
    }

    .shadow-color {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .shadow-tools {
        margin: 2rem 10px 0px 0px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }

    .shadow {
        display: grid;
        margin-right: 10px;
        grid-template-columns: 120px 40px;
        grid-gap: 2rem;
        justify-content: space-between;
    }

    .button3 {
        display: inline-block;
        padding: 0.25rem 0.7rem;
        border: 0.1em solid #FF2020;
        margin: 0 0.2em 0.2em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
        color: #FFFFFF;
        text-align: center;
        transition: all 0.2s;
    }

    .button3:hover,
    .button3:focus {
        color: #000000;
        background-color: #EA0D0D;
    }
</style>