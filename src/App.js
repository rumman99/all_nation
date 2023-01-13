import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [country, setCountry]=useState([]);  
  const [countryCart, setcountryCart]= useState([]);

  useEffect(() =>{
    
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {setCountry(data); /*console.log(data); let name= data.map(cntry => cntry.name); console.log(name)*/})
    .catch(error => console.log(error))
  }, []);

  const cntryClick= (clickedCountry) =>{
    const newcountryCart= [...countryCart, clickedCountry];
    setcountryCart(newcountryCart);
  }
  

  let count=1;
  return (
    <div className='main'>
      <h1>Country Number: {country.length}</h1>
      <h2>Country Added: {countryCart.length}</h2>
      <Cart countryCart={countryCart} ></Cart>
      <ul>
      {
      country.map(cntry => <Country count={count++} cntryInfo={cntry} cntryClick={cntryClick} key={cntry.cca3}></Country>)
      }
      </ul>
    </div>
  );
}

export default App;
