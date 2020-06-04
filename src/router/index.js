import Home from '../views/home/home'
import Login from '../views/login/login'
import User from '../views/user/User'
import List from '../views/user/List'
import Detail from '../views/user/Detail'

const routes = [
  { path: '/', component: Login, exact: true},
  { path: '/home', component: Home, exact: true},
  {
    path: '/user',
    component: User,
    routes: [
      { path: '/user/', component: List, exact: true},
      { path: '/user/detail', component: Detail},
    ]
  }
]

export default routes