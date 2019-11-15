import Login from "../components/contents/login/Login"
import Mypage from "../components/contents/mypage/MyPage"

import SecheduleBoard from '../components/contents/board/schedule/Board'
import SecheduleBoardDetail from '../components/contents/board/schedule/BoardDetail'
import SecheduleBoardWrite from '../components/contents/board/schedule/BoardWrite'

import CodeBoard from '../components/contents/board/code/Board'
import CodeBoardDetail from '../components/contents/board/code/BoardDetail'
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
        component: SecheduleBoardDetail
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
        component: CodeBoardDetail
    },
 
    {
        path: "/board/code",
        component: CodeBoard
    },




  ];


  
  export default routes