import React from 'react';
import   {useParams}  from "react-router-dom"; 

const BoardDeail = () => {
    let {id}= useParams();
    id = parseInt(id)+1;
 
    return (
        <> 
            {id}번 게시글<br/>
           디테일
           
        </>   
    );
};

export default BoardDeail;