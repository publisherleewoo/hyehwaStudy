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
  console.log("code/BoardDetail")
    let {id}= parseInt(useParams())+1;
    return (
        <>
            <Container>
                <Header as='h3' content={id} style={style.h3} textAlign='center' />
                 코드디테일
                 디테일. postId로 데이터가져옴
           </Container>
        </>   
    );
};

export default BoardDeail;