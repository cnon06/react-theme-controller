import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate( `/search?q=${keyword}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
}

export default Searchbar;
