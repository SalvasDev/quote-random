import React from 'react'
import styled from '@emotion/styled';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min(98% 750px);
    margin: 10rem auto 0 auto;

    .cont__quote {
        display: flex;
    }

     .rectangle {
        margin: 0;
        width: .8rem;
        max-height: 100%;
        background-color: #F7DF94;
    }
    
    .quote__text {
        width: 100%;
        font-size: 36px;
        margin-left: 10rem;
    }

    
`;

const Quote = ({quotetxt}) => {
    return ( 
        <Container>
            <div className="cont__quote">
                <div className="rectangle"></div>
                <p className="quote__text">{quotetxt}</p>
            </div>        
        </Container>
     );
}
 
export default Quote;