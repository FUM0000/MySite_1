Vue.component('main-navigation', {
    template: `
    <v-navigation-drawer class="blue-grey lighten-5" v-model="drawer_local" app right>

        <!-- Logo -->
        <v-list-item class="px-2 non-underline">
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-f</v-icon>
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-u</v-icon>
            <v-spacer></v-spacer>
            <v-icon color="blue-grey darken-3" x-large>mdi-alpha-m</v-icon>
            <v-spacer></v-spacer>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Home -->
        <v-btn href="./index.html" class="font-weight-black non-underline" block dark>
            Back to Home&nbsp;<v-icon>mdi-home</v-icon>
        </v-btn>

        <!-- Navigation -->
        <v-list nav dense>

            <v-list-item href="./greeting.html">
                <v-list-item-icon><v-icon>mdi-human-greeting-variant</v-icon></v-list-item-icon>
                <v-list-item-title>Greeting</v-list-item-title>
            </v-list-item>

            <!-- Limited period word -->
            <!-- <v-list-item href="./word_limited_period.html">
                <v-list-item-icon><v-icon>mdi-clock-alert-outline</v-icon></v-list-item-icon>
                <v-list-item-title>Limited period word</v-list-item-title>
            </v-list-item> -->


            <v-list-group :value="false" prepend-icon="mdi-book-open-page-variant-outline">
                <template v-slot:activator>
                    <v-list-item-title>Basic</v-list-item-title>
                </template>

                <v-list-item href="./points_learning.html">
                    <v-list-item-icon />
                    <v-list-item-title>Learning Points</v-list-item-title>
                </v-list-item>
                <v-list-item href="./character.html">
                    <v-list-item-icon />
                    <v-list-item-title>Character</v-list-item-title>
                </v-list-item>
                <v-list-item href="./grammar.html">
                    <v-list-item-icon />
                    <v-list-item-title>Grammar</v-list-item-title>
                </v-list-item>
                <v-list-item href="./asking.html">
                    <v-list-item-icon />
                    <v-list-item-title>Asking</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_general.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - General</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_verb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Verb</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_adjective_i.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adjective - i</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_adjective_na.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adjective - na</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_adverb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adverb</v-list-item-title>
                </v-list-item>
            </v-list-group>

            
            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Food</v-list-item-title>
                </template>

                <v-list-item href="./word_food.html">
                    <v-list-item-icon />
                    <v-list-item-title>General</v-list-item-title>
                </v-list-item>

                <v-list-item href="./word_food_chinese.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chinese</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_italian.html">
                    <v-list-item-icon />
                    <v-list-item-title>Italian</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_seafood.html">
                    <v-list-item-icon />
                    <v-list-item-title>Seafood</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_seasoning.html">
                    <v-list-item-icon />
                    <v-list-item-title>Seasoning</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_sushi.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sushi</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_vegetable.html">
                    <v-list-item-icon />
                    <v-list-item-title>Vegetable</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Hobby</v-list-item-title>
                </template>

                <v-list-item href="./word_art.html">
                    <v-list-item-icon />
                    <v-list-item-title>Art</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_math.html">
                    <v-list-item-icon />
                    <v-list-item-title>Math</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_music.html">
                    <v-list-item-icon />
                    <v-list-item-title>Music</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_outdoor.html">
                    <v-list-item-icon />
                    <v-list-item-title>Outdoor</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_reading.html">
                    <v-list-item-icon />
                    <v-list-item-title>Reading</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_sf.html">
                    <v-list-item-icon />
                    <v-list-item-title>SF</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_sport.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sport</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_travel.html">
                    <v-list-item-icon />
                    <v-list-item-title>Travel</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Life</v-list-item-title>
                </template>

                <v-list-item href="./word_body.html">
                    <v-list-item-icon />
                    <v-list-item-title>Body</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_computer.html">
                    <v-list-item-icon />
                    <v-list-item-title>Computer</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_game.html">
                    <v-list-item-icon />
                    <v-list-item-title>Game</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_house.html">
                    <v-list-item-icon />
                    <v-list-item-title>House</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_kitchen.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitchen</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_time.html">
                    <v-list-item-icon />
                    <v-list-item-title>Time</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Nature</v-list-item-title>
                </template>

                <v-list-item href="./word_nature.html">
                    <v-list-item-icon />
                    <v-list-item-title>General</v-list-item-title>
                </v-list-item>
                
                <v-list-item href="./word_animal.html">
                    <v-list-item-icon />
                    <v-list-item-title>Animal</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_forest.html">
                    <v-list-item-icon />
                    <v-list-item-title>Forest</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_plant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Plant</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_river.html">
                    <v-list-item-icon />
                    <v-list-item-title>River</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_sea.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sea</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Shop</v-list-item-title>
                </template>

                <v-list-item href="./word_cafe.html">
                    <v-list-item-icon />
                    <v-list-item-title>Cafe</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_clothes_store.html">
                    <v-list-item-icon />
                    <v-list-item-title>Clothes</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_hospital.html">
                    <v-list-item-icon />
                    <v-list-item-title>Hospital</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_restaurant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Restaurant</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_supermarket.html">
                    <v-list-item-icon />
                    <v-list-item-title>Supermarket</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Word - Outside</v-list-item-title>
                </template>

                <v-list-item href="./word_company.html">
                    <v-list-item-icon />
                    <v-list-item-title>Company</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_gym.html">
                    <v-list-item-icon />
                    <v-list-item-title>Gym</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_park.html">
                    <v-list-item-icon />
                    <v-list-item-title>Park</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_road.html">
                    <v-list-item-icon />
                    <v-list-item-title>Road</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_school.html">
                    <v-list-item-icon />
                    <v-list-item-title>School</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_vehicle.html">
                    <v-list-item-icon />
                    <v-list-item-title>Vehicle</v-list-item-title>
                </v-list-item>
                <v-list-item href="./word_weather.html">
                    <v-list-item-icon />
                    <v-list-item-title>Weather</v-list-item-title>
                </v-list-item>
            </v-list-group>


            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Verb - Detail</v-list-item-title>
                </template>

                <v-list-item href="./verb_type.html">
                    <v-list-item-icon />
                    <v-list-item-title>Verb Type</v-list-item-title>
                </v-list-item>
            </v-list-group>
            
            <v-list-group :value="false" prepend-icon="mdi-library-outline">
                <template v-slot:activator>
                    <v-list-item-title>Kanji</v-list-item-title>
                </template>

                <v-list-item href="./kanji_basic.html">
                    <v-list-item-icon />
                    <v-list-item-title>Basic</v-list-item-title>
                </v-list-item>
            </v-list-group>



            <v-list-group :value="false" prepend-icon="mdi-gamepad-square-outline">
                <template v-slot:activator>
                    <v-list-item-title>Game</v-list-item-title>
                </template>
                <v-list-item href="./game_kitty_hopper.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitty Hopper</v-list-item-title>
                </v-list-item>
                <v-list-item href="./game_catmodel.html">
                    <v-list-item-icon />
                    <v-list-item-title>View Kitty</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-chef-hat">
                <template v-slot:activator>
                    <v-list-item-title>Cooking</v-list-item-title>
                </template>

                <v-list-item href="./cooking_simple.html">
                    <v-list-item-icon />
                    <v-list-item-title>Simple</v-list-item-title>
                </v-list-item>
                <v-list-item href="./cooking_normal.html">
                    <v-list-item-icon />
                    <v-list-item-title>Normal</v-list-item-title>
                </v-list-item>
                <v-list-item href="./cooking_intricate.html">
                    <v-list-item-icon />
                    <v-list-item-title>Intricate</v-list-item-title>
                </v-list-item>
                <v-list-item href="./cooking_chinese.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chinese</v-list-item-title>
                </v-list-item>
                <v-list-item href="./cooking_pasta.html">
                    <v-list-item-icon />
                    <v-list-item-title>Pasta</v-list-item-title>
                </v-list-item>
                <v-list-item href="./cooking_ramen.html">
                    <v-list-item-icon />
                    <v-list-item-title>Ramen</v-list-item-title>
                </v-list-item>
            </v-list-group>

            
            <v-list-group :value="false" prepend-icon="mdi-sprout">
                <template v-slot:activator>
                    <v-list-item-title>Vegetable</v-list-item-title>
                </template>

                <v-list-item href="./onion.html">
                    <v-list-item-icon />
                    <v-list-item-title>Onion</v-list-item-title>
                </v-list-item>
                <v-list-item href="./spinach.html">
                    <v-list-item-icon />
                    <v-list-item-title>Spinach</v-list-item-title>
                </v-list-item>
                <v-list-item href="./chrysanthemum.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chrysanthemum</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-music">
                <template v-slot:activator>
                    <v-list-item-title>Music</v-list-item-title>
                </template>

                <v-list-item href="./utada_hikaru.html">
                    <v-list-item-icon />
                    <v-list-item-title>Utada Hikaru</v-list-item-title>
                </v-list-item>
                <v-list-item href="./showgo.html">
                    <v-list-item-icon />
                    <v-list-item-title>Show-Go</v-list-item-title>
                </v-list-item>
                <v-list-item href="./ua.html">
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
                <v-list-item-title>Youtube_Japanese</v-list-item-title>
            </v-list-item>
            <v-list-item href="https://www.youtube.com/@FUM-Sanpo">
                <v-list-item-icon><v-icon>mdi-youtube</v-icon></v-list-item-icon>
                <v-list-item-title>Youtube_Walking</v-list-item-title>
            </v-list-item>
            <v-list-item></v-list-item>

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