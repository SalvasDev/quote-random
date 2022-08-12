import React, { Fragment, useState, useEffect } from 'react'
import Quote from './components/Quote';
import Footer from './components/Footer';
import styled from '@emotion/styled';
import Quotecolect from './components/Quotecolect';

const Randbtn = styled.div `
  width: min(98%, 100vw);
  display: flex;
  justify-content: end;
  margin: 3rem 10rem 0 auto;
  column-gap: 1rem;
  align-items: center;

  
  .rand {
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: #4F4F4F;
    letter-spacing: .5px;
    
  }
`;

const Contgral = styled.div`

  display: flex;
  flex-direction: column;
  width: min(98%, 750px);
  margin: 0rem auto 0 auto;


.quote__info {              
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12rem;
        margin-left: 9rem;
        padding-left: 3rem;
        height: 15.1rem;
        border: none;
        background-color: transparent;

      
        span {
            margin-right: 2rem;
            margin-left: auto;
            color: white;
        }
        &:hover {
            background-color: #333333;
            color: white;
            cursor: pointer;
        } 
    }

    .quote__group {
        display: flex;
        flex-direction: column;        
    }

    .quote__author {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: .8rem;
    }

    .quote__genre {
        font-size: 1.4rem;
        color: #828282;
        margin-top: 0;
        text-align: left;
    }


`;


function App() {


const [ quotesauthor, guardarQuotesAuthor ] = useState([]);

const [ quotetxt, guardarQuotetxt] = useState('');
const [ author, guardarAuthor ] = useState('');
const [ genre, guardarGenre ] = useState('');

const [ mostrar, guardarMostrar ] = useState(false);



const consultAPI = async () => {
    
    const api = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    const frase = await api.json();
    guardarQuotetxt(frase.data[0].quoteText);
    guardarAuthor(frase.data[0].quoteAuthor);
    guardarGenre(frase.data[0].quoteGenre);

  mostrarColec(false)


}

useEffect( () => {
  consultAPI()
}, [])


 const mostrarColec = (mostrar) => {  
        if (mostrar) {
            guardarMostrar(true)
            return;
          }
          guardarMostrar(false);
          return;
        }



const consultAuthor = async () => {

    mostrarColec(true);
    
    const api = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}&limit=3`);

    const quotes = await api.json();

    if (quotes.length === 0) return;
    guardarQuotesAuthor(quotes.data);

 } 

  return (
    <Fragment>
      <Randbtn>        
        <button
        onClick = {consultAPI}
        className="rand">random<span className="material-symbols-sharp">autorenew</span> 
        </button>
      </Randbtn>
     <Contgral>
      { mostrar 
      ? <Quotecolect 
        author = {author}
        quotesauthor = {quotesauthor}
      /> 
      : <Fragment>
        <Quote
        quotetxt = {quotetxt}
        />
      
        <button 

          onClick={ consultAuthor }
          className="quote__info">

              <div className="quote__group">
                    <p className="quote__author">{author}</p>
                    <p className="quote__genre">{genre}</p>            
              </div> 

              <span className="material-symbols-sharp">
                arrow_right_alt
              </span> 
         </button>   
         </Fragment>
          }
       </Contgral>
     
     <Footer author='Salvador Sánchez'/>


    </Fragment>


  );
}

export default App;


