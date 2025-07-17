import GetRecipe from "./GetRecipe";

export default function IngredientsList(props) {
    console.log("IngredientsList rendered");
    return (
        <section>
            <ul>
                {props.ingredients.length>0 && <h1>Ingredients on Hand:</h1>}
                {props.ingredientsListItems}
            </ul>
            {props.ingredients.length >= 5 ?<GetRecipe />: null}
        </section>
    )
}