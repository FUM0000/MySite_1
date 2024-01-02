Vue.component('main-system-bar', {
    template: `
    <v-system-bar color="#CFD8DC80" class="font-weight-black" app>
        <v-row align="center">
            <v-col>
                <audio id="audio_1" src="https://fum0000.github.io/MySite_1/Audio/sample_1.mp3" pause="pause" loop="loop"></audio>
                <v-icon id="speaker_1">mdi-volume-variant-off</v-icon>
                <slot></slot>
            </v-col>
            <v-spacer></v-spacer>
            // <v-icon id="arrow_1" color="red" x-small style="font-size: 10px; transform: rotate(90deg);">mdi-navigation</v-icon>
            <v-col @click.stop="drawer_local = !drawer_local">
                <v-icon v-model="drawer_local">mdi-alpha-m</v-icon>
                <v-icon v-model="drawer_local">mdi-alpha-e</v-icon>
                <v-icon v-model="drawer_local">mdi-alpha-n</v-icon>
                <v-icon v-model="drawer_local">mdi-alpha-u</v-icon>
            </v-col>
        <v-row>
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