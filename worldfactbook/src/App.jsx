import { useEffect, useState } from "react";
import './app.css'

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
    <div className="container-all">
      <div className="top">
        <h1>Dados dos Países 🌍</h1>
        <p>Última atualização dos dados da api: 02/2026</p>
      </div>
      <div className="container">
        {countries.map((item, index)=>{
          return(
            <article key={index}>
              <div className="card">
              <strong className="title">{item.name}</strong>
                <ul>
                  {item.capital && (
                    <li><strong>Capital:</strong> {item.capital}</li>
                  )}
                  <li><strong>Região:</strong> {item.region}</li>
                  <li><strong>População:</strong> {item.population}</li>
                  {item.gdp && (
                    <li><strong>PIB:</strong> {item.gdp}</li>
                  )}
                </ul>
                <a href={`https://en.wikipedia.org/wiki/${item.name}`} target="blank">Mais informações</a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default App;