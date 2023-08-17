import React, { useState, useRef, useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preparation, setPreparation] = useState("");
  const [url, setUrl] = useState("");
  const [material, setMaterial] = useState("");
  const [image, setImage] = useState("");
  const [materials, setMaterials] = useState([]);
  const materialInput = useRef(null);
  const navigate = useNavigate();
  const { color, mode } = useContext(ThemeContext);

  const { postData, data } = useFetch("http://localhost:3000/recipes/", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(description);
    // console.log(preparation);
    // console.log(url);

    postData({ title, description, preparation, materials, image, url });
    // console.log(data);
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }

    console.log(data);
  }, [data, navigate]);

  const handleAddMaterial = () => {
    const item = material.trim();
    if (item && !materials.includes(item)) {
      setMaterials((prevItems) => [...prevItems, item]);
    }

    setMaterial("");
    materialInput.current.focus();
    materialInput.current.value = "";
  };

  return (
    <div className={`card mt-3 bg-${mode === "light" ? "light" : "dark"} text-${mode === "light" ? "light" : "dark"} border-${mode === "dark" ? "light" : "dark"}`}
    
    // "card mt-3 bg-dark text-light border-light"
    >
      <div className={`card-body text-${mode === "dark" ? "light" : "dark"}`} >
        <h2>Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title: {title}
            </label>
            <input
              type="text"
              name="title"
              className={`form-control bg-${mode === "light" ? "light" : "dark"} text-${mode === "dark" ? "light" : "dark"}`}
              // "form-control bg-dark text-light"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="materials" className="form-label">
              Materials:{" "}
              <ul>
                {materials.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
              </ul>{" "}
            </label>
            <div className="input-group">
              <input
                type="text"
                name="materials"
                ref={materialInput}
                className="form-control"
                onChange={(e) => setMaterial(e.target.value)}
              />
              <button
                type="button"
                className={`btn btn-${color}`}
                onClick={handleAddMaterial}
              >
                +
              </button>
            </div>
            {/* <input type="text" name='materials' className='form-control' onChange={(e) => (setDescription(e.target.value) )}/> */}
          </div>

          <div className="mb-3">
            <label htmlFor="preparation" className="form-label">
              Preparation
            </label>
            <textarea
              name="preparation"
              id="preparation"
              className="form-control"
              onChange={(e) => setPreparation(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Resim
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="text"
              name="url"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <button type="submit" className={`btn btn-${color}`}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
