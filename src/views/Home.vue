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
    import _ from 'lodash';
    import Recipe from '@/components/Recipe.vue';
    import {Recipe as RecipeModel} from '../models/Recipe';
    import RecipeService from '@/services/RecipeService';

    @Component({
        components: {
            Recipe,
        },
    })
    export default class Home extends Vue {
        get ingredients(): string {
            return this.$store.getters.ingredients;
        }

        set ingredients(ingredients: string) {
            this.$store.dispatch('setIngredients', ingredients);
            this.debouncedSearch(ingredients);
        }

        get recipes(): RecipeModel[] {
            return this.$store.getters.recipes;
        }

        private debouncedSearch = _.debounce(ingredients => {
            if (ingredients && ingredients !== '') {
                this.searchRecipe(ingredients);
            } else {
                this.getRecipes();
            }
        }, 1000);

        public mounted() {
            if (this.ingredients === '') {
                this.getRecipes();
            }
        }

        public searchRecipe(ingredients: string) {
            RecipeService.searchRecipe(ingredients)
                .then(data => this.$store.dispatch('setRecipes', data));
        }

        public searchForm() {
            this.searchRecipe(this.ingredients);
        }

        private getRecipes() {
            RecipeService.getRecipes()
                .then(data => this.$store.dispatch('setRecipes', data));
        }
    }
</script>

<style scoped lang="scss">
    #results {
        margin-top: 30px;
        text-align: left;
    }
</style>
