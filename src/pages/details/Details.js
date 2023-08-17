import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../../contexts/ThemeContext";

function Details() {
  
  const { id } = useParams();
  // const [recipe, setRecipe] = useState(null);

  const url = "http://localhost:3000/recipes/" + id;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     // .then((data) => {console.log(data)});
  //     .then((data) => setRecipe(data));
  // }, [url]);

  const { data: recipe, isLoading } = useFetch(url);
  const { color,mode } = useContext(ThemeContext);

  return (
    
    <div className={`row mt-3 text-${mode === "dark" ? "light" : "dark"}`}>
      {isLoading && <div className="alert alert-warning">...Loading</div>}
      {recipe && (
        <>
          <div className="col-4">
            {/* {recipe.title} {recipe.image} */}
            <img
              src={`../img/${recipe.image}`}
              alt={recipe.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-8">
            <h5>{recipe.title}</h5>
            <p>{recipe.description}</p>
            <ul>
              {
                // recipe.materials
                recipe.materials &&
                  recipe.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))
              }
            </ul>
          </div>
          <div className="col-12 mt-3">
            <hr />
            <p>{recipe.preparation}</p>
            <a href={recipe.url} className={`btn btn-outline-${color}`} >
              View Recipe
            </a>
          </div>
        </>
      )}
    </div>

    // <div>
    // {recipe.title}

    // </div>
  );
}

export default Details;
