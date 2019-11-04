import Login from "../components/contents/login/Login"
import Board from '../components/contents/board/Board'
import BoardDeail from '../components/contents/board/BoardDeail'
import BoardWrite from '../components/contents/board/BoardWrite'


const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/board/write",
        component: BoardWrite
    },
    {
        path: "/board/:id",
        component: BoardDeail
    },
    {
        path: "/board",
        component: Board
    },
  ];


  
  export default routes