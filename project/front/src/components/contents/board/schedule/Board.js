import React from 'react'
import {Link} from "react-router-dom";
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'
import BoardTable from './BoardTable'
import DropDown from '../DropDown'
 
let scheduleDummyData=[
    {no:"0", category:"schedule",title:"스케쥴타이틀1",userNickName:"리우",userImgsrc:"",date:"20191101",likes:"20"},
    {no:"1", category:"schedule",title:"스케쥴타이틀2",userNickName:"LHW",userImgsrc:"",date:"20191103",likes:"40"},
    {no:"2", category:"schedule",title:"스케쥴타이틀3",userNickName:"우형",userImgsrc:"",date:"20191104",likes:"5"},
]

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
}

const Board = () => {
    console.log("sechdule/Board")
    return (
        <>
            <Header as='h3' content='schedule' style={style.h3} textAlign='center' />
            <Container>
                <DropDown></DropDown>
                <BoardTable datas={scheduleDummyData}></BoardTable>
                <Link to="/board/schedule/write"> <Button>글쓰기</Button></Link>
            </Container>    
        </>         
    );
};

export default Board;