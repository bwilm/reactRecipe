 import React from 'react'
import './Recipe.css'


 const Recipe = ({title, calories, image,ingredients}) => {


      
     return(
         <div className="recipeBox">
             <h1>{title}</h1>
         <div className="recipe"> 
         <div class="image-col">
         <img src={image} className="recipeImage"/>
         </div>
         
         <ol className="list">
             {ingredients.map(ingredient => (<li>{ingredient.text}</li>
             ))}
             <p><b>Cals:</b>{calories}</p>
         </ol>
         </div>

         </div>
     )
 }

 export default Recipe