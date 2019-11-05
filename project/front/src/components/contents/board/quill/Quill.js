import React,{ PureComponent} from 'react'
import {
    Button
  } from 'semantic-ui-react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import './Quill.css' 



class Quill extends PureComponent{

    state={
        text:''
    }

    handleChange=(e)=>{
      console.log(e)
    }
 
    
    render(){
        console.log("Quill")
        return(
         <>
            <ReactQuill value={this.state.text} onChange={this.handleChange}/>
            <Button>전송</Button>
         </>
        )
    }
}

export default Quill