import React from 'react'
import increment from './actions/increment'
import {useDispatch,useSelector} from 'react-redux'
import decrement from './actions/decrement'
import toggle from './actions/toggle'




const App=()=>{
    const dispatch=useDispatch()
const counter=useSelector((state)=> state.counter)
const kuchBhi=useSelector(state=> state.isLoggedIn)
    return (
    <div>
        <h1>COUNTER  {counter} </h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <div>
            <h1>You are {kuchBhi?'logged IN':'logged OUT'}</h1>
            <button onClick={()=>{dispatch(toggle())}}>CHANGE</button>
        </div>
    </div>
    )
}

export default App