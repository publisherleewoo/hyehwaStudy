import React from 'react';
import {Link} from "react-router-dom";


const Board = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/board/0">게시글1</Link></li>
                <li>
                    <Link to="/board/1">게시글2</Link></li>
                <li>
                    <Link to="/board/2">게시글3</Link></li>
            </ul>

            <Link to="/board/write">글쓰기</Link>

        </>   
    );
};

export default Board;