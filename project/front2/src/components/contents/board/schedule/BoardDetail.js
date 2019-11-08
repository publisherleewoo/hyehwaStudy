import React from 'react';
import {useParams}  from "react-router-dom"; 
import {
    Container,
    Header,
  } from 'semantic-ui-react'

  const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
}
  
const BoardDeail = () => {
  let {id}= parseInt(useParams())+1;
    console.log("sechdule/BoardDetail")
    return (
        <>
            <Container>
                <Header as='h3' content={id} style={style.h3} textAlign='center' />
                디테일. postId로 데이터가져옴
           </Container>
        </>   
    );
};

export default BoardDeail;