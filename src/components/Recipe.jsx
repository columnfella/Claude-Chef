import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
    return (
        <section className="recipe" aria-live="polite">
            {props.isWaiting && 
            <div className="recipe-loading">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
            }
            <section>
            {props.recipeReceived && <h2>Jim Chef recommends:</h2>}
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
        </section>
    )
}