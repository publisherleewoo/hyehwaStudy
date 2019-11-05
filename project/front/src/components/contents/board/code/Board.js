import React from 'react'
import {Link} from "react-router-dom";
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'
import BoardTable from './BoardTable'
import DropDown from '../DropDown'

let codeDummyData=[
    {no:"0", category:"schedule",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
    {no:"1", category:"schedule",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
    {no:"2", category:"schedule",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
]

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
}

const Board = () => {
    console.log("code/Board")
    return (
        <>
            <Header as='h3' content='code' style={style.h3} textAlign='center' />
            <Container>

                <DropDown></DropDown>
                <BoardTable datas={codeDummyData}></BoardTable>
                <Link to="/board/code/write"> <Button>글쓰기</Button></Link>
            </Container>
           
        </>
        
        
    );
};

export default Board;