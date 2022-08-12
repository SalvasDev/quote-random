import React, { Fragment } from 'react'
import Quote from './Quote';
import styled from '@emotion/styled';


const Contcolect = styled.div`
    display: flex;
    flex-direction: column;
    width: min(98%, 750px);
    margin: 10rem auto 0 auto;

    h1 {
      margin-left: 11rem;
      font-size: 3.6rem;
      font-weight: 700;
      margin-bottom: 0;
    }

    .cont__quote {
        display: flex;
    }

   
    .quote__text {
        width: 100%;
        font-size: 36px;
        margin-left: 10rem;
    }

     .rectangle {
        margin: 0;
        width: .8rem;
        max-height: 100%;
        background-color:  #F7DF94;
    }
    
`;

const Quotecolect = ({author, quotesauthor}) => {


    return (
      <Fragment>
          <Contcolect>
          <h1>{author}</h1>
          { quotesauthor.map(quotes => (
              
                <Quote
                   key = {quotes._id}
                   quotetxt = {quotes.quoteText}
                />
             
            ))}         
   
        </Contcolect>
    </Fragment>
  );
}
 
export default Quotecolect;