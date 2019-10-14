import {Recipe} from '@/models/Recipe';
import axios from 'axios';

export default class RecipeService {
    public static readonly BASE_URL = 'https://recipe-reverse-api.herokuapp.com/recipes';

    public static getRecipes(): Promise<Recipe[]> {
        return axios.get(RecipeService.BASE_URL)
            .then(response => response.data);
    }

    public static searchRecipe(ingredients: string): Promise<Recipe[]> {
        return axios.get(`${RecipeService.BASE_URL}/recommendations?ingredients=${ingredients}`)
            .then(response => response.data);
    }
}
