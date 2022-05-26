import React from 'react';

const Card = ({ recette }) => {
    return (
        <div className="card-container col-12 col-sm-6 col-md-4 col-xl-3 mb-3 g-3">
            <div className="card h-100 p-0 m-0 rounded-3" >
                <img src={recette.strMealThumb} className='card-img-top w-100' alt={recette.strMeal} />
                <div className="card-body">
                    <h5 className="card-title text-center p-2">{recette.strMeal}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">category : {recette.strCategory}</h6>
                    <h6 className="card-subtitle mb-3 text-muted">Origin : {recette.strArea}</h6>
                    <p className="card-text">{recette.strInstructions.substring(0, 100)} ...</p>
                </div>
            </div>
        </div>
    );
};

export default Card;