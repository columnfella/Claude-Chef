import GetRecipe from "./GetRecipe";

export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))

    return (
        <section>
            <ul className="ingredients-list">
                {props.ingredients.length>0 && <h1>Ingredients on Hand:</h1>}
                {ingredientsListItems}
            </ul>
            {props.ingredients.length >= 5 ?<GetRecipe setRecipeShow={props.setRecipeShow} sectionRef={props.sectionRef} recipe={props.recipe}/>: null}
        </section>
    )
}