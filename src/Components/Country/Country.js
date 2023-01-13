import React from 'react';

const Country = (props) => {
    const {name, flags, capital, population}= props.cntryInfo;
    const click = props.cntryClick;

    let countColor={color:"red"};
    return (
        <div>
            <h3><span style={countColor}>{props.count}.</span> Country Name: {name.common}</h3>
            <h3>Official Name: {name.official}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Population {population}</h4>
            <img src={flags.png} alt="" />
            <br></br>
            <button onClick={() => click(props.cntryInfo)}>ADD</button>
            <p>--------------------------------------------------------------------------------------------</p>
        </div>
    );
};

export default Country;