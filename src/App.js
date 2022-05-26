import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios.get('https://themealdb.com/api/json/v1/1/search.php?s=' + inputSearch)
      .then((res) => { setData(res.data.meals) })
  }, [inputSearch])



  return (
    <div className='container'>
      <h1 className='text-center m-5'>Recipes from the world</h1>
      <div className="input-group mb-5 input-search-meal m-auto">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setInputSearch(e.target.value)} />
      </div>

      <div className="row">

        {data.map((recette) => (<Card key={recette.idMeal} recette={recette} />))}
      </div>
    </div>
  );
};

export default App;