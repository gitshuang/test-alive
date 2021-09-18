import { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Redirect, useHistory  } from 'react-router-dom'
import { KeepaliveRouterSwitch ,KeepaliveRoute ,addKeeperListener } from 'react-keepalive-router'
import Index from './components/index';
import Detail from './components/detail'
import List from './components/lifecycle'
import List2 from './components/goodsList'

const menusList = [
  {
    name: '首页',
    path: '/index'
  },
  {
    name: '生命周期demo',
    path: '/list'
  },
  {
    name: '缓存列表demo',
    path: '/list2'
  },
  {
    name: '表单demo',
    path: '/detail'
  },
]

function Meuns(){
  const history = useHistory()
   return <div className="theStyle" >
   { menusList.map(item=><span className="routerLink" onClick={()=> {  history.push(item.path) } }   key={item.path}  >{ item.name }</span>) }
  </div>
}

const App = () => {
  useEffect(()=>{
    /* 增加缓存监听器 */
    addKeeperListener((history,cacheKey)=>{
      debugger
      if(history)console.log('当前激活状态缓存组件：'+ cacheKey )
    })
  },[])
  return (
    <div className="App">
     <Router>
     <Meuns/>
     {/* <span onClick={()=> {  history.push('/index') } }   key={'/index'}  >首页</span>
     <span onClick={()=> {  debugger; history.push('/detail') } }   key={'/detail'}  >详情页</span> */}
      <KeepaliveRouterSwitch>
          <Route path={'/index'} component={Index} ></Route>
          <KeepaliveRoute path={'/list2'} component={List2} scroll />
          <Route path={'/list'} component={List} ></Route>
          { /* 我们将详情页加入缓存 */ }
          <KeepaliveRoute path={'/detail'} component={ Detail } ></KeepaliveRoute>
          <Redirect from='/*' to='/index' />
       </KeepaliveRouterSwitch>
      </Router>
    </div>
  );
}

export default App;
