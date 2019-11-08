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
  {no:"0", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"1", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"2", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"3", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"4", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"5", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"6", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"7", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"8", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"9", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"10", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"11", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"12", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"13", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"14", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"15", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"16", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"17", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"18", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"19", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"20", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"21", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"22", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"23", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"24", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"25", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"26", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"27", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"28", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"29", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"30", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"31", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"32", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"33", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"34", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"35", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"36", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"37", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"38", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"39", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"40", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"41", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"42", category:"code",title:"코드타이틀1",userNickName:"테스터3",userImgsrc:"",date:"20191101",likes:"3"},
  {no:"43", category:"code",title:"코드타이틀2",userNickName:"테스터1",userImgsrc:"",date:"20191103",likes:"2"},
  {no:"44", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
  {no:"45", category:"code",title:"코드타이틀3",userNickName:"테스트",userImgsrc:"",date:"20191104",likes:"6"},
].reverse()

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