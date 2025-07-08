import { people } from "./data";
import { getImageUrl } from "./utils";
import { recipes } from "./data2";

// render over all scientest 
/*
export default function List() {
    const listItems = people.map(person=>
        <li key = {person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '} known for {person.accomplishment}
            </p>
        </li>
    );


return (
    <article>
        <h1>Scientists</h1>
        <ul>{listItems}</ul>
    </article>
)
}
*/

// rendring by filtering 

// filtering by profession chemist and all other profession . 

/*export default function list() {
    const chemists = people.filter(person => 
        person.profession === 'chemist'
    );

    const everyOneElse = people.filter(person => 
        person.profession !== 'chemist'
    ) ;

    return(
        <article>
            <h1>Scientist</h1>
            <h2>Chemist</h2>
            <ul>
                {chemists.map(person => 
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name}/>
                        <p>
                            <b>{person.name} : </b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>

            <h2>Everyone Else</h2>
            <ul>
                {everyOneElse.map(person => 
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name} />
                        <p>
                            <b>{person.name} : </b>
                             {' ' + person.profession + ' '} known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
        </article>
    )
}
    */

// nested list over reciepes. 
export default function RecipeList () {
    return(
    <div>
        <h1>Recipes</h1>
        {recipes.map(recipe => 
            <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <ul>
                    {recipe.ingredients.map(ingredient => 
                        <li key={ingredient}>
                            {ingredient}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
    );
}