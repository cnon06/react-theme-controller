import React, {useContext} from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { ThemeContext } from "../../contexts/ThemeContext";

function Search() {
  const { mode} = useContext(ThemeContext)
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;
  const { data: recipes, isLoading, error } = useFetch(url);
  return (
    <div className="row mt-3">
      <h2 className={`text-${mode === "dark" ? "light" : "dark"}`}>Keyword: "{query}"</h2>
      <hr />
      {isLoading && <div className="alert alert-warning">...Loading</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {recipes &&
        recipes.map((recipe, index) => (
          <ProductCard key={index} recipe={recipe} />
        ))}
    </div>
  );
}

export default Search;
