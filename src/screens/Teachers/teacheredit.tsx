import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '4e98df1438mshd9f7c96cd32cfbfp1ccea9jsn04159ea3ba85',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

function Teacheredit() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios.request(options)
    .then((response) => {
      console.log(response.data);
      setAnimeList(response.data);  
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="d-flex">
  
      {animeList.map((e:any, index) => (
        <div className="ms-5"  key={index}>

        <img src={e.image} alt="" />
        <h1 className="mt-3">{e.title}</h1>
        <h1 className="mt-3">{e.year}</h1>
        <h4>{e.description}</h4>
      

        </div>
      ))}
    </div>
  );
}

export default Teacheredit;
