<template>
    <div class="border-radius">
        <h1 class="center">Border Radius</h1>

        <div class="border_show">
            <div v-for="(radius, index) in border_box.border_radius" :key="index">

                <div @click="add_active_class(index)">
                    <button ref="button" @click='show_part = radius.part' class="button2">{{radius.min}}</button>
                </div>


                <div class="radius-tools" v-if="show_part == radius.part">
                    <v-slider @input="update_border_radius(radius.part, radius.value)" v-model.number="radius.value" max="400" min="0"></v-slider>

                    <v-text-field v-model.number="radius.value" hide-details single-line class="mt-0" type="number"> </v-text-field>

                    <p style="margin-top: -20px;">{{ radius.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'BorderRadius',
        data() {
            return {
                show_part: 'border-radius',
                border_box: {
                    border_radius: [{
                            part: 'border-radius',
                            text: 'Radius',
                            min: 'All',
                            value: ''
                        },
                        {
                            part: 'border-bottom-left-radius',
                            text: 'Border Bottom Left Radius',
                            min: 'B-L',
                            value: ''
                        },
                        {
                            part: 'border-bottom-right-radius',
                            text: 'Border Bottom Right Radius',
                            min: 'B-R',
                            value: ''
                        },
                        {
                            part: 'border-top-left-radius',
                            text: 'Border Top Left Radius',
                            min: 'T-L',
                            value: ''
                        },
                        {
                            part: 'border-top-right-radius',
                            text: 'Border Top Right Radius',
                            min: 'T-R',
                            value: ''
                        }
                    ],
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

            update_border_radius(property, value) {

                if (property === 'border-radius') {
                    let border_radius = this.border_box.border_radius

                    border_radius.forEach(element => {
                        element.value = border_radius[0].value

                    });
                }

                this.$store.commit({
                    type: 'update_border_radius',
                    value: property,
                    size: `${value}px`
                })
            },
        },

        mounted() {
            this.border_box.border_radius.forEach(element => {
                element.value = 10
            });
        }
    }
</script>

<style>
    .border-radius {
        margin-top: 125px;
    }

    .radius-tools {
        position: absolute;
        top: 475px;
        left: 10px;
        display: grid;
        grid-template-columns: 160px 60px;
        grid-column-gap: 1rem;
    }

    .button2 {
        display: inline-block;
        padding: 0.25rem 0.7rem;
        border: 0.1em solid #FFFFFF;
        margin: 0 0.2em 0.2em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #ffffff;
        text-align: center;
        transition: all 0.2s;
    }
</style>