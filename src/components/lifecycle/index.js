import React   from 'react'

import './style.less'
import { keepaliveLifeCycle } from 'react-keepalive-router'
console.log(keepaliveLifeCycle)

@keepaliveLifeCycle
class Index extends React.Component{

    state={
        activedNumber:0,
        unActivedNumber:0
    }
    actived(){
        this.setState({
            activedNumber:this.state.activedNumber + 1
        })
    }
    unActived(){
        this.setState({
            unActivedNumber:this.state.unActivedNumber + 1
        })
    }
    render(){
        const { activedNumber , unActivedNumber } = this.state
        return <div  style={{ marginTop :'50px' }}  >
           <div> 页面 actived 次数： {activedNumber} </div>
           <div> 页面 unActived 次数：{unActivedNumber} </div>

        </div>
    }
}

export default Index