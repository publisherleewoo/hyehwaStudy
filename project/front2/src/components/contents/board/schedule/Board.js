import React,{PureComponent} from 'react'
import {Link} from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Pagination
} from 'semantic-ui-react'
import BoardTable from './BoardTable'
import DropDown from '../DropDown'


let codeDummyData=[
  {no:"0", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"1", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"2", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"3", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"4", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"5", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"6", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"7", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"8", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"9", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"10", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"11", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"12", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"13", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"14", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"15", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"16", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"17", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"18", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"19", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"20", category:"schedule",title:"스케쥴 타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"21", category:"schedule",title:"스케쥴 타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"22", category:"schedule",title:"스케쥴 타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
 
]

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  DropDown:{
    float:"left"
  },
  btn:{
    float:"right"
  }
}


let viewLength=10

class Board extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      defaultActivePage:1,
      totalPages:Math.ceil(codeDummyData.length/viewLength),
      view:codeDummyData.slice(0,viewLength)
    }
  }

  pageChangeHandler=(e,d)=>{
    let {activePage} = d;
    this.setState({
      activePage,
      view:codeDummyData.slice((activePage*viewLength)-viewLength,(activePage*viewLength))
    })
  }
  


  render(){  
  let {defaultActivePage,totalPages} = this.state;
  console.log("code/Board") 
    return (
        <>
            <Header as='h3' content='code' style={style.h3} textAlign='center' />
            <Container>
                <DropDown></DropDown>
                <Link style={style.btn}to="/board/code/write"> <Button>글쓰기</Button></Link>
                <BoardTable datas={this.state.view}></BoardTable>  
                <Pagination defaultActivePage={defaultActivePage} totalPages={totalPages} onPageChange={this.pageChangeHandler} />          
            </Container>
        </>       
    );
  }
};

export default Board;