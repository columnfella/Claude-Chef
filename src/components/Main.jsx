import { useState } from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromMistral } from '../ai.js';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [isWaiting, setIsWaiting] = useState(false);
    
    async function getRecipeFromHG() {
        console.log("Fetching recipe with ingredients:", ingredients);
        setIsWaiting(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setIsWaiting(false);
        console.log("Received recipe:", recipeMarkdown);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (!newIngredient) {
            alert("Please enter an ingredient.");
            return;
        }
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

        console.log(ingredients)
    }
    
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                aria-label="Add Ingredient"
                placeholder="e.g. 1 cup of flour"
                type="text" 
                name="ingredient"/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 255, 255)" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                    <span>Add Ingredient</span>
                </button>
            </form>
            { ingredients.length > 0 && 
            <IngredientsList ingredients={ingredients} setRecipeShow={getRecipeFromHG}/> }
            
            <Recipe recipe={recipe} isWaiting={isWaiting}/>
        </main>
    )
}