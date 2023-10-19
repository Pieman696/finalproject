import React from 'react';
import axios from 'axios';
import Chuck from '../../assets/ChuckNorris.png';

export default function Body() {
  const [category, setCategory] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [currentJoke, setCurrentJoke] = React.useState('Click the Get Joke button to get radom Joke');


  React.useEffect(() =>{
    axios.get('https://api.chucknorris.io/jokes/categories').then((res) => {
        setCategory(res.data);
    
    });
  }, []);

  const getJoke =() => {
    if (currentCategory === "") {
        axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
            setCurrentJoke(res.data.value);
    });
    } else {
axios.get(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`)

  .then((res) => {
    setCurrentJoke(res.data.value);
    });
   
   }
  };


  return (
    <div>
    <div
        className="body-wrapper">
        <img src= {Chuck}  /> 
        <div className="body-joke-area" id="body-joke-area">
            {currentJoke}
            </div>
        <div className="body-button-wrapper">
            <button className="body-joke-button" id="joke-button"
            onClick={() => getJoke()}
        
            > Get Joke</button>

        </div>
    <div className="body-radio-wrapper" id="body-radio-wrapper">
        {
         
                category.map((cat) => {
                    return (
                        <div className="category-container">
                    
                        <div className="body-radio-button">
                          <input
                            type="radio"
                            name="radio"
                            value={cat}
                            id={cat}
                            onClick={() => setCurrentCategory(cat)}
                        />
                        <label htmlFor={cat}>{cat}</label>
                        </div>
                        </div>
                    );
                })
            }
        </div>
    
      </div>
    </div>

  );  
}