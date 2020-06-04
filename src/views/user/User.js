import React, { PureComponent } from 'react';
import {Route, Link} from 'react-router-dom'
class User extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="user-page">
        <div className="left">
          二级菜单
          <Link to="/user/">用户列表</Link>
          <Link to="/user/detail">用户详情</Link>
        </div>
        <div className="right">
          {
            this.props.routes.map((el, index) => {
              return <Route key={index} exact={el.exact} path={el.path} render={props => (<el.component { ...props } /> )} />
            })
          }
        </div>
      </div>
    );
  }
}

export default User
