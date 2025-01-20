import "./style.css";

// 일반 함수는 export를 써서 호출할 수 있게 한다
export function printConsole(){
    console.log("hello2파일입니다.");
}

export function printConsole2(){
    console.log("hello2파일입니다.");
}

// {}로 변수를 사용할 수 있다.
function Hello2(){
    const h1Text = 'Hello React!!';
    const h1 = <h1>{h1Text}</h1>;
    
    return <>
        {h1}
        <label className="box" htmlFor="username">아이디</label>
        <input id="username" />
    </>
}

export default Hello2;
