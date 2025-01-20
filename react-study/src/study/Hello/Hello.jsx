// <> 비어있는 것 가능하다

function Hello(){
    return <>
        <h1>Hello react!!</h1> 
        <input type="text"/>
    </>   
}
// 리액트에서는 태그는 무조건 닫혀야한다
// 꼭 감싸져야한다
export default Hello;