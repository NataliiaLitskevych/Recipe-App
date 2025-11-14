import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  //https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=b7edc033&app_key=4dfb2226902f5955cc49e865c117217f

  const MY_ID="b7edc033";
  const MY_KEY="4dfb2226902f5955cc49e865c117217f";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits); 
    setMyRecipes(data.hits); 
  }
    getRecipe()
  }, [])

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  return (
    <div className='App'>
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" />
        </button>
      </div>

      {myRecipes.map(element => (
        <MyRecipesComponent label={element.recipe.label} image={element.recipe.image}/>
      ))}
    


    </div>
  )
}

export default App
