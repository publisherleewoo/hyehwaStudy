import React,{memo} from 'react'
import {Link} from "react-router-dom";
import {
  Dropdown,
  Menu,
 } from 'semantic-ui-react'

 const style = {
    pd0: {
      padding: '0em',
    },
    pd:{
        padding:"11px 16px",
        display:"block"
    },
    Menu:{float:'left'}
  }
  
const DropDown = memo(() =>{
    return (
    <Menu.Menu style={style.Menu}position='right'>
    <Dropdown text='Dropdown' pointing className='link item'>
    <Dropdown.Menu>
        <Link style={style.pd}to="/board/schedule"><Dropdown.Item style={style.pd0}>schedule</Dropdown.Item></Link>
        <Link style={style.pd}to="/board/code"><Dropdown.Item style={style.pd0}>code</Dropdown.Item></Link>
    </Dropdown.Menu>
    </Dropdown>
    </Menu.Menu>
    )
})

export default DropDown