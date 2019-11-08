import React from 'react';
import Comment from './Comment';
import Statistic from "./Statistic"
import {useParams}  from "react-router-dom"; 
import {
    Container,
    Header,
    Item
  } from 'semantic-ui-react'

  const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
}
  
const BoardDeail = () => {
  console.log("code/BoardDetail")
    let id = parseInt(useParams().id)+1 + "번째 글"
    return (
        <>
            <Container>
              <Statistic></Statistic>
                <Header as='h3' content={id} style={style.h3} textAlign='center' />
                <Item.Group>
                  <Item>
                    <Item.Image size='tiny' src='/images/wireframe/image.png' />

                    <Item.Content>
                      <Item.Header as='a'> 코드타이틀</Item.Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                      <Item.Extra>부가설명</Item.Extra>
                      </Item.Description>
                      <Item.Extra>디테일. postId로 데이터가져옴</Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
                
                 
                 <Comment></Comment>
           </Container>
        </>   
    );
};

export default BoardDeail;