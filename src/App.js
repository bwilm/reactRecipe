import React, {useEffect, useState} from 'react'; 
import './App.css';
import Recipe from './Recipe'

const App = () => {



  const APP_ID = 'e15fe590'
  const APP_KEY = '32362453ea736fc95779cbb73515b62d'
  const [recipes, setRecipes ] = useState([]) 
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')



  useEffect(() => {
    getRecipes()
  }, [query])


  const getRecipes= async () =>{

     const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)

     const data  = await response.json()
     setRecipes(data.hits)
     console.log(data.hits)
   }

   const updateSearch = e =>{
    setSearch(e.target.value)

   }

   const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
   }
 
   const plusIncr = (currentIndex, setIndex) =>{
    setIndex =  currentIndex + 1
    return setIndex
    
   }


  return(
    <div className ="App">
      <div class="header">
        <i>seasoned</i>
      </div>
      <div className="search">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
      </form>
      </div>
      <div class="container">
      {/* <div class="left-arrow" onClick={plusIncr}> left Arrow </div> */}
      {recipes.map( function (num, index){
        let currentIndex = '0'
        if( index === currentIndex){
          return <Recipe 
          title={num.recipe.label}
          calories={num.recipe.calories}
          image={num.recipe.image}
          ingredients={num.recipe.ingredients} />
        }
      })}
      {/* <div class="right-arrow" onClick={plusIncr}> right arrow</div> */}
      </div>
    </div>
  )
}

export default App;
