import React,{Component} from 'react';
import Comment from './Comment';
import Statistic from "./Statistic"
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
/* axios로 가져와서 뿌리기 */  
var textCon  ='<p>dwqdwqdq<strong>wdqwd</strong>wqdwqdqwdwqd</p><p>dwqdwqdqdwq</p>';

 
class BoardDeail extends Component {
  
  constructor(props){
    super(props)
    this.state={
      id:parseInt(props.match.params.id)+1+"번째 글"
    }
    
  }

  componentDidMount(){
    /* 받아온값 입력 */
    document.querySelector('.extra').innerHTML=textCon;
  }


  render(){

    return (
        <>
            <Container>
              <Statistic></Statistic>
                <Header as='h3' content={this.id} style={style.h3} textAlign='center' />
                <Item.Group>
                  <Item>
                    <Item.Image size='tiny' src='/images/wireframe/image.png' />

                    <Item.Content>
                      <Item.Header as='a'> 코드타이틀</Item.Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                      <Item.Extra>부가설명</Item.Extra>
                      </Item.Description>
                      <Item.Extra>
                      </Item.Extra>
                    
                    </Item.Content>
                  </Item>
                </Item.Group>
                
                 
                 <Comment></Comment>
           </Container>
        </>   
    );
  }
};

export default BoardDeail;