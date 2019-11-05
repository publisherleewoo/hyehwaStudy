import React from 'react';
import {
    Container,
    Header,
    Button
  } from 'semantic-ui-react'
  
  const style = {
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
  }

const MyPage = () => {
    return (
        <>
            <Header as='h3' content='schedule' style={style.h3} textAlign='center' />
            <Container>
                마이페이지
            </Container>
        </>
    );
};

export default MyPage;