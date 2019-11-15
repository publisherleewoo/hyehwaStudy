import React,{ PureComponent ,createRef} from 'react'
import {
    Button,
    Confirm
  } from 'semantic-ui-react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import './Quill.css' 



class Quill extends PureComponent{

    constructor(props){
      super(props)
      this.state = { open: false }
    }

    clickHandler=()=>{
      let value =this.inputRef.current.state.value;
      console.log(value)
      this.open(value)
      
    } 
    open = (value) =>{
      console.log("비동기로 전송될 값, state로 code인지, schedule인지 판단",value)
      this.setState({ open: true })
    }
    close = () => this.setState({ open: false })

    inputRef=createRef();

    render(){
        console.log("Quill")
        return(
         <>
            <ReactQuill ref={this.inputRef}/>
            <Button onClick={this.clickHandler}>전송</Button>
            <Confirm
               content='전송하시겠습니까?'
              open={this.state.open}
              onCancel={this.close}
              onConfirm={this.close}
            />
         </>
        )
    }
}

export default Quill