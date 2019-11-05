import React,{useState} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

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
  /* react-quill */

const BoardWrite = () => {
  const [text,setText] = useState('');
  const handleChange=(e)=>{
    console.log(e)
  }

  console.log("sechdule/BoardWrite")
    return (
        <> 
            <Header as='h3' content='schedule' style={style.h3} textAlign='center' />
            <Container>
            <ReactQuill value={text}
                    onChange={handleChange} />
            </Container>
        </>   
    );
};

export default BoardWrite;