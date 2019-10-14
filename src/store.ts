import Vue from 'vue';
import Vuex from 'vuex';
import {Recipe} from '@/models/Recipe';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ingredients: '',
        recipes: [] as Recipe[],
    },
    mutations: {
        setIngredients(state, ingredients: string) {
            return state.ingredients = ingredients;
        },
        setRecipes(state, recipes: Recipe[]) {
            return state.recipes = recipes;
        },
    },
    getters: {
        ingredients: state => state.ingredients,
        recipes: state => state.recipes,
    },
    actions: {
        setIngredients(context, ingredients: string) {
            context.commit('setIngredients', ingredients);
        },
        setRecipes(context, recipes: Recipe[]) {
            context.commit('setRecipes', recipes);
        },
    },
});
