import {Recipe} from '@/models/Recipe';

export default class RecipeService {
    public static readonly BASE_URL = 'https://recipe-reverse-api.herokuapp.com/recipes';

    public static getRecipes(): Promise<Recipe[]> {
        return fetch(RecipeService.BASE_URL)
            .then(data => data.json());
    }

    public static searchRecipe(ingredients: string): Promise<Recipe[]> {
        return fetch(`${RecipeService.BASE_URL}/recommendations?ingredients=${ingredients}`)
            .then(data => data.json());
    }
}
