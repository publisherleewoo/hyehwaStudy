import React from 'react';
import Quill from "../quill/Quill"


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



const BoardWrite = () => {


   console.log("code/BoardWrite")
    return (
        <> 
            <Header as='h3' content='codeWrite' style={style.h3} textAlign='center' />
            <Container>
                <Quill></Quill>
            </Container>
        </>   
    );
};

export default BoardWrite;