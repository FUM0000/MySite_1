Vue.component('main-navigation', {
    template: `
    <v-navigation-drawer class="blue-grey lighten-5" v-model="drawer_local" app right>

        <v-btn :ripple="false" style="cursor: default;" class="font-weight-black non-underline" block dark>
            MENU
        </v-btn>

        <!-- Navigation -->
        <v-list nav dense>
        <!-- Home -->
            <v-list-item href="./index.html">
                <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>



            <v-list-group :value="false" prepend-icon="mdi-hand-heart-outline">
                <template v-slot:activator>
                    <v-list-item-title>Language</v-list-item-title>
                </template>
                
                <v-list-item href="./index_spanish.html">
                    <v-list-item-icon />
                    <v-list-item-title>Español</v-list-item-title>
                </v-list-item>
            </v-list-group>



            <v-list-item href="./Introduction.html">
                <v-list-item-icon><v-icon>mdi-human-greeting-variant</v-icon></v-list-item-icon>
                <v-list-item-title>Introduction</v-list-item-title>
            </v-list-item>



            <!-- Limited period word -->
            <!-- <v-list-item href="./Word_LimitedPeriod.html">
                <v-list-item-icon><v-icon>mdi-clock-alert-outline</v-icon></v-list-item-icon>
                <v-list-item-title>Limited period word</v-list-item-title>
            </v-list-item> -->



            <v-list-group :value="false" prepend-icon="mdi-book-account">
                <template v-slot:activator>
                    <v-list-item-title>Basic</v-list-item-title>
                </template>

                <v-list-item href="./Basic_LearningPoints.html">
                    <v-list-item-icon />
                    <v-list-item-title>Learning Points</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Character.html">
                    <v-list-item-icon />
                    <v-list-item-title>Character</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Grammar.html">
                    <v-list-item-icon />
                    <v-list-item-title>Grammar</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Asking.html">
                    <v-list-item-icon />
                    <v-list-item-title>Asking</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_GeneralWord.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - General Word</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Conversation.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Conversation</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Verb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Verb</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Adjective_i.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adjective - i</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Adjective_na.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adjective - na</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Basic_Adverb.html">
                    <v-list-item-icon />
                    <v-list-item-title>Word - Adverb</v-list-item-title>
                </v-list-item>
            </v-list-group>


            
            <v-list-group :value="false" prepend-icon="mdi-noodles">
                <template v-slot:activator>
                    <v-list-item-title>Word - Food</v-list-item-title>
                </template>

                <v-list-item href="./Food_General.html">
                    <v-list-item-icon />
                    <v-list-item-title>General</v-list-item-title>
                </v-list-item>

                <v-list-item href="./Food_Chinese.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chinese</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Food_Italian.html">
                    <v-list-item-icon />
                    <v-list-item-title>Italian</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Food_Seafood.html">
                    <v-list-item-icon />
                    <v-list-item-title>Seafood</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Food_Seasoning.html">
                    <v-list-item-icon />
                    <v-list-item-title>Seasoning</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Food_Sushi.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sushi</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Food_Vegetable.html">
                    <v-list-item-icon />
                    <v-list-item-title>Vegetable</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-tennis">
                <template v-slot:activator>
                    <v-list-item-title>Word - Hobby</v-list-item-title>
                </template>

                <v-list-item href="./Hobby_Art.html">
                    <v-list-item-icon />
                    <v-list-item-title>Art</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Game.html">
                    <v-list-item-icon />
                    <v-list-item-title>Game</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Math.html">
                    <v-list-item-icon />
                    <v-list-item-title>Math</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Music.html">
                    <v-list-item-icon />
                    <v-list-item-title>Music</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Outdoor.html">
                    <v-list-item-icon />
                    <v-list-item-title>Outdoor</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Reading.html">
                    <v-list-item-icon />
                    <v-list-item-title>Reading</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Sf.html">
                    <v-list-item-icon />
                    <v-list-item-title>SF</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Sport.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sport</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Hobby_Travel.html">
                    <v-list-item-icon />
                    <v-list-item-title>Travel</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-syllabary-katakana">
                <template v-slot:activator>
                    <v-list-item-title>Word - Japalish</v-list-item-title>
                </template>

                <v-list-item href="./Japalish_Level_1.html">
                    <v-list-item-icon />
                    <v-list-item-title>Level 1</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Japalish_Level_2.html">
                    <v-list-item-icon />
                    <v-list-item-title>Level 2</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Japalish_Level_3.html">
                    <v-list-item-icon />
                    <v-list-item-title>Level 3</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-coffee">
                <template v-slot:activator>
                    <v-list-item-title>Word - Life</v-list-item-title>
                </template>

                <v-list-item href="./Life_Body.html">
                    <v-list-item-icon />
                    <v-list-item-title>Body</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Life_Computer.html">
                    <v-list-item-icon />
                    <v-list-item-title>Computer</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Life_House.html">
                    <v-list-item-icon />
                    <v-list-item-title>House</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Life_Kitchen.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitchen</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Life_Time.html">
                    <v-list-item-icon />
                    <v-list-item-title>Time</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-nature-people">
                <template v-slot:activator>
                    <v-list-item-title>Word - Nature</v-list-item-title>
                </template>

                <v-list-item href="./Nature_General.html">
                    <v-list-item-icon />
                    <v-list-item-title>General</v-list-item-title>
                </v-list-item>
                
                <v-list-item href="./Nature_Animal.html">
                    <v-list-item-icon />
                    <v-list-item-title>Animal</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Nature_Forest.html">
                    <v-list-item-icon />
                    <v-list-item-title>Forest</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Nature_Plant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Plant</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Nature_River.html">
                    <v-list-item-icon />
                    <v-list-item-title>River</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Nature_Sea.html">
                    <v-list-item-icon />
                    <v-list-item-title>Sea</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-cart">
                <template v-slot:activator>
                    <v-list-item-title>Word - Shop</v-list-item-title>
                </template>

                <v-list-item href="./Shop_ClothesStore.html">
                    <v-list-item-icon />
                    <v-list-item-title>Clothes</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Shop_Supermarket.html">
                    <v-list-item-icon />
                    <v-list-item-title>Supermarket</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group :value="false" prepend-icon="mdi-beach">
                <template v-slot:activator>
                    <v-list-item-title>Word - Outside</v-list-item-title>
                </template>

                <v-list-item href="./Outside_Cafe.html">
                    <v-list-item-icon />
                    <v-list-item-title>Cafe</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Company.html">
                    <v-list-item-icon />
                    <v-list-item-title>Company</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Direction.html">
                    <v-list-item-icon />
                    <v-list-item-title>Direction</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Gym.html">
                    <v-list-item-icon />
                    <v-list-item-title>Gym</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Hospital.html">
                    <v-list-item-icon />
                    <v-list-item-title>Hospital</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Restaurant.html">
                    <v-list-item-icon />
                    <v-list-item-title>Restaurant</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Park.html">
                    <v-list-item-icon />
                    <v-list-item-title>Park</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Road.html">
                    <v-list-item-icon />
                    <v-list-item-title>Road</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_School.html">
                    <v-list-item-icon />
                    <v-list-item-title>School</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Vehicle.html">
                    <v-list-item-icon />
                    <v-list-item-title>Vehicle</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Outside_Weather.html">
                    <v-list-item-icon />
                    <v-list-item-title>Weather</v-list-item-title>
                </v-list-item>
            </v-list-group>


            <v-list-group :value="false" prepend-icon="mdi-book-open-page-variant">
                <template v-slot:activator>
                    <v-list-item-title>Verb</v-list-item-title>
                </template>

                <v-list-item href="./Verb_Type.html">
                    <v-list-item-icon />
                    <v-list-item-title>Type</v-list-item-title>
                </v-list-item>
            </v-list-group>
            
            <v-list-group :value="false" prepend-icon="mdi-ideogram-cjk">
                <template v-slot:activator>
                    <v-list-item-title>Kanji</v-list-item-title>
                </template>

                <v-list-item href="./Kanji_Basic.html">
                    <v-list-item-icon />
                    <v-list-item-title>Basic</v-list-item-title>
                </v-list-item>
            </v-list-group>



            <v-list-group :value="false" prepend-icon="mdi-sprout">
                <template v-slot:activator>
                    <v-list-item-title>Vegetable</v-list-item-title>
                </template>

                <v-list-item href="./Vegetable_Chrysanthemum.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chrysanthemum</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Vegetable_Onion.html">
                    <v-list-item-icon />
                    <v-list-item-title>Onion</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Vegetable_Spinach.html">
                    <v-list-item-icon />
                    <v-list-item-title>Spinach</v-list-item-title>
                </v-list-item>
            </v-list-group>



            <v-list-group :value="false" prepend-icon="mdi-nintendo-game-boy">
                <template v-slot:activator>
                    <v-list-item-title>Game</v-list-item-title>
                </template>
                <v-list-item href="./Game_KittyHopper.html">
                    <v-list-item-icon />
                    <v-list-item-title>Kitty Hopper</v-list-item-title>
                </v-list-item>
            </v-list-group>



            <v-list-group :value="false" prepend-icon="mdi-chef-hat">
                <template v-slot:activator>
                    <v-list-item-title>Cooking</v-list-item-title>
                </template>

                <v-list-item href="./Youtube_Cooking_Simple.html">
                    <v-list-item-icon />
                    <v-list-item-title>Simple</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Cooking_Normal.html">
                    <v-list-item-icon />
                    <v-list-item-title>Normal</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Cooking_Intricate.html">
                    <v-list-item-icon />
                    <v-list-item-title>Intricate</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Cooking_Chinese.html">
                    <v-list-item-icon />
                    <v-list-item-title>Chinese</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Cooking_Pasta.html">
                    <v-list-item-icon />
                    <v-list-item-title>Pasta</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Cooking_Ramen.html">
                    <v-list-item-icon />
                    <v-list-item-title>Ramen</v-list-item-title>
                </v-list-item>
            </v-list-group>

            

            <v-list-group :value="false" prepend-icon="mdi-music">
                <template v-slot:activator>
                    <v-list-item-title>Music</v-list-item-title>
                </template>

                <v-list-item href="./Youtube_Music_UtadaHikaru.html">
                    <v-list-item-icon />
                    <v-list-item-title>Utada Hikaru</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Music_Showgo.html">
                    <v-list-item-icon />
                    <v-list-item-title>Show-Go</v-list-item-title>
                </v-list-item>
                <v-list-item href="./Youtube_Music_Ua.html">
                    <v-list-item-icon />
                    <v-list-item-title>UA</v-list-item-title>
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



            <v-list-item></v-list-item>
            <v-list-item></v-list-item>
            <v-list-item></v-list-item>
            <v-list-item></v-list-item>
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