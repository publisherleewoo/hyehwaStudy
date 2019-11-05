import React from 'react';
import {Link} from "react-router-dom";
 
import {
  Container,
  Header,
  Menu,
  Image,
} from 'semantic-ui-react'
const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
}
const Nav = () => {
    return (
      <>
     
      <Header as='h3' content='Hyehwa Study' style={style.h3} textAlign='center' />
          <Container>
            <Menu stackable>
              <Menu.Item><Image  size='mini' src="/images/logo.png" /></Menu.Item>
              <Menu.Item><Link to="/board/schedule">Board</Link></Menu.Item>
              <Menu.Item><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item><Link to="/mypage">Mypage</Link></Menu.Item>
            
            </Menu>
          </Container>
      </>   
    );
};

export default Nav;