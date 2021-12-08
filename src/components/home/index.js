//todo
import React from 'react'
import './index.css'
import { useCacheDispatch } from '../../react-keepalive-router'

const Index = ()=>{
    const dispatch = useCacheDispatch()
    const handerClick = (payload) => {
        dispatch({ type:'reset' , payload  })
    }

         return <div className="box" >
             <div className="item"
                 onClick={() => handerClick('/list')}
             >清除  生命周期</div>
             <div className="item"
                 onClick={() => handerClick('/list2')}
             >清除  缓存列表</div>
             <div className="item"
                 onClick={() => handerClick('/detail')}
             >清除  缓存表单</div>
         </div>
}





export default Index