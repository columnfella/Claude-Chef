import {useEffect} from "react"

export default function GetRecipe(props) {
  function handleGetRecipe() {
    props.setRecipeShow();
    console.log("Recipe button clicked");
  }
  useEffect(()=>{
        props.sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"     
        })
    }, [props.recipe])

  return (
    <div className="get-recipe" ref={props.sectionRef}>
      <div className="get-recipe-info">
        <h2>Ready to cook?</h2>
        <p>Generate your recipe with the listed ingredients.</p>
      </div>
      
      <button onClick={handleGetRecipe} className="get-recipe-button">Get a recipe</button>
    </div>
  );
}