import React,{ PureComponent} from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
 



class Quill extends PureComponent{

    state={
        text:''
    }

    handleChange=(e)=>{
      console.log(e)
    }
 
    
    render(){
        return(
         <>
            <ReactQuill value={this.state.text} />
         </>
        )
    }
}

export default Quill