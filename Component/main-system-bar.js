Vue.component('main-system-bar', {
    template: `
    <v-system-bar color="#CFD8DC80" class="font-weight-black" app>
        <audio id="audio_1" src="https://fum0000.github.io/MySite_1/Audio/sample_1.mp3" pause="pause" loop="loop"></audio>
        <v-icon id="speaker_1">mdi-volume-variant-off</v-icon>
        <slot></slot>
        <v-spacer></v-spacer>
        <v-icon id="arrow_1" color="red" x-small style="font-size: 10px; transform: rotate(90deg);">mdi-navigation</v-icon>
        <v-icon v-model="drawer_local" @click.stop="drawer_local = !drawer_local">mdi-alpha-f-circle-outline</v-icon>
    </v-system-bar>
    `,
    props: ['drawer'],
    computed: {
        drawer_local: {
            get() { return this.drawer; },
            set(_value) { this.$emit("change-drawer", _value); }
        }
    }
})