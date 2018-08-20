<template>
    <div>
        <div class="the_box" ref="box" :style="this.$store.state.box">
            <v-dialog class="get_style" width="400">
                <button class="button1" @click='get_text()' slot="activator">Get Style</button>
                <v-card>
                    <v-card-text>
                        {{ text }}
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Box',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            get_text() {
                this.text =
                    this.$refs.box.attributes[1].value

            }
        }
    }
</script>

<style>
    .the_box {
        display: grid;
        align-content: center;
        justify-content: center;
        /* z-index: 2; */
    }

    .get_style {
        position: absolute;
        top: 0;
        right: 0;

        padding: 3rem 4rem 0px 0px;
    }
</style>