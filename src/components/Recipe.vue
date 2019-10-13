<template>
    <b-container class="recipe">
        <b-card :title="recipe.name">
            <b-card-text>
                <span v-for="ingredient in recipe.ingredients">{{ingredient}}, </span>
            </b-card-text>

            <b-link :href="recipe.url" target="_blank" class="card-link">Check it out</b-link>
        </b-card>
    </b-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Recipe as RecipeModel} from '../models/Recipe';

    @Component({
        components: {},
    })
    export default class Recipe extends Vue {
        @Prop() public recipe!: RecipeModel;

        get nameLetter(): string {
            return this.recipe.name.charAt(0).toUpperCase();
        }
    }
</script>

<style scoped lang="scss">
    .recipe {
        text-align: left;
        margin-top: 30px;
    }

    #name-letter-wrapper {
        height: 100px;
        width: 100px;
        padding: 25px;
        color: #FFF;
        background-color: #008577;
        border-radius: 50%;
    }
</style>
