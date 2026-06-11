import { useEffect, useState } from "react";

function App(){

  //https://worldfactbook.io/api/v1/countries/

  const [countries, setCountries] = useState([])

  useEffect(()=>{
    function loadApi(){
      let apiUrl = 'https://worldfactbook.io/api/v1/countries/'

      fetch(apiUrl)
      .then((response)=>response.json())
      .then((json)=>{
        console.log(json)
        setCountries(json)
      })
    }

    loadApi();
  }, []);
  

  return(
    <div className="container">
      <h1>Dados dos Países</h1>
      {countries.map((item)=>{
        return(
          <article key={item.id}>
            <strong>{item.name}</strong>
            <p>Capital: {item.capital}</p>
          </article>
        )
      })}
    </div>
  )
}

export default App;