import { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Redirect ,useHistory  } from 'react-router-dom'
import { KeepaliveRouterSwitch ,KeepaliveRoute ,addKeeperListener } from 'react-keepalive-router'
import Index from './components/index';
import List from './components/list'
import Detail from './components/detail'

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
      <KeepaliveRouterSwitch>
          <Route path={'/index'} component={Index} ></Route>
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
