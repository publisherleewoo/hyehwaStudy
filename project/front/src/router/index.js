import Login from "../components/contents/login/Login"
import Mypage from "../components/contents/mypage/MyPage"

import SecheduleBoard from '../components/contents/board/schedule/Board'
import SecheduleBoardDeail from '../components/contents/board/schedule/BoardDeail'
import SecheduleBoardWrite from '../components/contents/board/schedule/BoardWrite'

import CodeBoard from '../components/contents/board/code/Board'
import CodeBoardDeail from '../components/contents/board/code/BoardDeail'
import CodeBoardWrite from '../components/contents/board/code/BoardWrite'



const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/mypage",
        component: Mypage
    },
    /* /board/schedule */
    {
        path: "/board/schedule/write",
        component: SecheduleBoardWrite
    },
    {
        path: "/board/schedule/:id",
        component: SecheduleBoardDeail
    },
    {
        path: "/board/schedule",
        component: SecheduleBoard
    },
    /* /board/code */
    {
        path: "/board/code/write",
        component: CodeBoardWrite
    },
    {
        path: "/board/code/:id",
        component: CodeBoardDeail
    },
 
    {
        path: "/board/code",
        component: CodeBoard
    },




  ];


  
  export default routes