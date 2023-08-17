import React, {useContext} from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';


function ProductCard({recipe}) {
  const {color, mode} = useContext(ThemeContext)
  return (
    <div className='col-3 mb-3'>
    <div className={`card border-${mode === "dark" ? "light" : "dark"} bg-${mode === "light" ? "light" : "dark"} text-${mode === "dark" ? "light" : "dark"}` } >
      <img src={`img/${recipe.image}`} alt={recipe.title} className='m-1'/>
      <div className="card-body">
        <h5 className='card-title'>{recipe.title}</h5>
        <p className='description'>{recipe.description}</p>
        <Link to={`/details/${recipe.id}`} className= {`btn btn-outline-${color}`}>View Recipe</Link>
        {/* <a href={recipe.url} className='btn btn-outline-primary'>View Recipe</a> */}
      </div>
    </div>
   
   </div>
  )
}

export default ProductCard