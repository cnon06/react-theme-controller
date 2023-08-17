
import ProductCard from '../../components/ProductCard';

import useFetch  from '../../hooks/useFetch';

function Home() {
  // const [recipes,setRecipes] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3000/recipes/").then(res => res.json()).then(data => setRecipes(data))
  // }, []) 

  const {data: recipes, isLoading, error} = useFetch("http://localhost:3000/recipes/")


  return (<div className="row mt-3">
   {isLoading && <div className='alert alert-warning'>...Loading</div>}
   {error && <div className='alert alert-danger'>{error}</div>}
 {recipes && recipes.map((recipe,index) => (
  <ProductCard key={index} recipe={recipe}/>
))
 }
  </div>
  )
}

export default Home