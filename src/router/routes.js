/**
 * Created by huangjs on 2017/4/10.
 */

import v_index from '../page/default/v_index'
import page1 from '../page/menu/page1'
import page2 from '../page/menu/page2'
import Login from '../page/login/login'

const routes = [
  {
    path: '/index',
    component: v_index,
    children: [
      {
        path: 'page1',
        component: page1
      },
      {
        path: 'page2',
        component: page2
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
