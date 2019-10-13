<template>
    <b-container class="home">
        <b-form @submit.prevent.stop="searchForm">
            <label class="sr-only" for="search-recipe">Name</label>
            <b-input type="text"
                     id="search-recipe"
                     placeholder="Search recipe"
                     aria-describedby="search-help-block"
                     v-model.trim.lazy="ingredients"></b-input>
            <b-form-text id="search-help-block">
                Search for recipes by entering the ingredients you have. Separate each ingredient with a comma e.g
                <strong><i>salt,sugar</i></strong>
            </b-form-text>
            <b-container>
                <h6 id="results">
                    <b-badge pill>{{ recipes.length }}</b-badge>
                    results
                </h6>
            </b-container>
            <recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe>
        </b-form>
    </b-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Recipe from '@/components/Recipe.vue';
    import {Recipe as RecipeModel} from '../models/Recipe';

    @Component({
        components: {
            Recipe,
        },
    })
    export default class Home extends Vue {
        public recipes: RecipeModel[] = [];
        private privateIngredients: string = '';

        public mounted() {
            fetch('https://recipe-reverse-api.herokuapp.com/recipes')
                .then(data => data.json())
                .then(data => this.recipes = data);
        }

        get ingredients(): string {
            return this.privateIngredients;
        }

        set ingredients(ingredients: string) {
            this.privateIngredients = ingredients;

            if (ingredients && ingredients !== '') {
                this.searchRecipe(ingredients);
            }
        }

        public searchRecipe(ingredients: string) {
            fetch(`https://recipe-reverse-api.herokuapp.com/recipes/recommendations?ingredients=${ingredients}`)
                .then(data => data.json())
                .then(data => this.recipes = data);
        }

        public searchForm() {
            this.searchRecipe(this.ingredients);
        }
    }
</script>

<style scoped lang="scss">
    #results {
        margin-top: 30px;
        text-align: left;
    }
</style>
