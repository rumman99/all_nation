import React from 'react';

const Cart = (props) => {
    const population= props.countryCart;
    
    const addPopulation= population.reduce((initialValue, newValue) => initialValue+newValue.population, 0);

    let countryName= population.map(cntryName => cntryName.name.common);
    const name= countryName.reduce((initialValue1, newValue1) => initialValue1+newValue1+', ', []);

    return (
        <div>
            <h4>Total Population of {name}: Added Population: {addPopulation}</h4>
        </div>
    );
};

export default Cart;