import { useState } from 'react'


const Detail = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <div onClick={()=>{setCount(count+1)}}>{count}</div>
     detail
     <a href='/index'>去index</a>
    </div>
  );
}

export default Detail;
