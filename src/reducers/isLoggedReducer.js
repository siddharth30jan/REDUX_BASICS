const isLoggedIn=(state=true,action)=>{
    if(action.type==="TOGGLE")
    return !state
    return state
}
export default isLoggedIn