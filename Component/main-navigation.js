Vue.component('main-navigation', {
    template: `
    <v-navigation-drawer class="blue-grey lighten-5" v-model="drawer_local" app right>

        <!-- Logo -->
        <v-list-item class="px-2 non-underline">
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-m</v-icon>
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-e</v-icon>
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-n</v-icon>
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-e</v-icon>
            <v-spacer></v-spacer>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Home -->
        <v-btn href="https://fum0000.github.io/MySite_1/index.html" class="font-weight-black non-underline" block dark>
            Home
        </v-btn>

        <!-- Navigation -->
        <v-list nav dense>

            <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/greeting.html">
                <v-list-item-icon><v-icon>mdi-human-greeting-variant</v-icon></v-list-item-icon>
                <v-list-item-title>Greeting</v-list-item-title>
            </v-list-item>

            <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/word_limited_period.html">
                <v-list-item-icon><v-icon>mdi-clock-alert-outline</v-icon></v-list-item-icon>
                <v-list-item-title>Limited period word</v-list-item-title>
            </v-list-item>

            <v-list-group :value="false" prepend-icon="mdi-book-open-page-variant-outline">
                <template v-slot:activator>
                    <v-list-item-title>Basic Japanese</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/character.html">
                    <v-list-item-icon />
                    <v-list-item-title>Character</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/grammar.html">
                    <v-list-item-icon />
                    <v-list-item-title>Grammar</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/verb_type.html">
                    <v-list-item-icon />
                    <v-list-item-title>Verb Type</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Basic</v-list-item-title>
                </template>
                
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_basic.html">
                    <v-list-item-icon />
                    <v-list-item-title>Basic</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_verb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Verb</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_adjective.html">
                    <v-list-item-icon />
                    <v-list-item-title>Adjective</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_adjective_special.html">
                    <v-list-item-icon />
                    <v-list-item-title>Special Adjective</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_adverb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Adverb</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_house.html">
                    <v-list-item-icon />
                    <v-list-item-title>House</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_road.html">
                    <v-list-item-icon />
                    <v-list-item-title>Road</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_body.html">
                    <v-list-item-icon />
                    <v-list-item-title>Body</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Nature</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_nature.html">
                    <v-list-item-icon />
                    <v-list-item-title>Nature</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_plant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Plant</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Life</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_vehicle.html">
                    <v-list-item-icon />
                    <v-list-item-title>Vehicle</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_company.html">
                    <v-list-item-icon />
                    <v-list-item-title>Company</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_school.html">
                    <v-list-item-icon />
                    <v-list-item-title>School</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_park.html">
                    <v-list-item-icon />
                    <v-list-item-title>Park</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_gym.html">
                    <v-list-item-icon />
                    <v-list-item-title>Gym</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_weather.html">
                    <v-list-item-icon />
                    <v-list-item-title>Weather</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_time.html">
                    <v-list-item-icon />
                    <v-list-item-title>Time</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_personal_computer.html">
                    <v-list-item-icon />
                    <v-list-item-title>Personal computer</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_kitchen.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitchen</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_game.html">
                    <v-list-item-icon />
                    <v-list-item-title>Game</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Shop</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_supermarket.html">
                    <v-list-item-icon />
                    <v-list-item-title>Supermarket</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_restaurant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Restaurant</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_clothing_store.html">
                    <v-list-item-icon />
                    <v-list-item-title>Clothing store</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_hospital.html">
                    <v-list-item-icon />
                    <v-list-item-title>Hospital</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_cafe.html">
                    <v-list-item-icon />
                    <v-list-item-title>Cafe</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Talking</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_hello_talk.html">
                    <v-list-item-icon />
                    <v-list-item-title>Hello Talk</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Food</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_food.html">
                    <v-list-item-icon />
                    <v-list-item-title>Food</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_sushi.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sushi</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/Word/word_italian.html">
                    <v-list-item-icon />
                    <v-list-item-title>Italian</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Kanji</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Japanese/kanji_basic.html">
                    <v-list-item-icon />
                    <v-list-item-title>Basic</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Spanish</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Spanish/dele_a1.html">
                    <v-list-item-icon />
                    <v-list-item-title>DELE - A1</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Spanish/dele_a2.html">
                    <v-list-item-icon />
                    <v-list-item-title>DELE - A2</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Spanish/mei.html">
                    <v-list-item-icon />
                    <v-list-item-title>Mei</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-gamepad-square-outline">
                <template v-slot:activator>
                    <v-list-item-title>Game</v-list-item-title>
                </template>
                <v-list-item href="https://fum0000.github.io/MySite_1/Game/game_kitty_hopper.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitty Hopper</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Game/game_catmodel.html">
                    <v-list-item-icon />
                    <v-list-item-title>View Kitty</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-noodles">
                <template v-slot:activator>
                    <v-list-item-title>Dish</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/dish_simple.html">
                    <v-list-item-icon />
                    <v-list-item-title>Simple</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/dish_normal.html">
                    <v-list-item-icon />
                    <v-list-item-title>Normal</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/dish_chinese.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chinese</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-music">
                <template v-slot:activator>
                    <v-list-item-title>Music</v-list-item-title>
                </template>

                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/utada_hikaru.html">
                    <v-list-item-icon />
                    <v-list-item-title>Utada Hikaru</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/showgo.html">
                    <v-list-item-icon />
                    <v-list-item-title>Show-Go</v-list-item-title>
                </v-list-item>
                <v-list-item href="https://fum0000.github.io/MySite_1/Youtube/ua.html">
                    <v-list-item-icon />
                    <v-list-item-title>UA</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-hand-heart-outline">
                <template v-slot:activator>
                    <v-list-item-title>Thank</v-list-item-title>
                </template>
                <v-list-item link>
                    <v-list-item-icon />
                    <v-list-item-title>You</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon />
                    <v-list-item-title>For</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon />
                    <v-list-item-title>Coming!</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-item href="https://www.youtube.com/channel/UCCYB5BH-9JRMebgRy0sVQIQ">
                <v-list-item-icon><v-icon>mdi-youtube</v-icon></v-list-item-icon>
                <v-list-item-title>My Youtube</v-list-item-title>
            </v-list-item>

            <v-list-item href="https://www.pinterest.jp/fum516/">
                <v-list-item-icon><v-icon>mdi-pinterest</v-icon></v-list-item-icon>
                <v-list-item-title>My Pinterest</v-list-item-title>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
    `,
    props: ['drawer'],
    computed: {
        drawer_local: {
            get() { return this.drawer; },
            set(_value) { this.$emit("change-drawer", _value); }
        }
    }
})