function TextInput ({id,text}) { // 매개변수는 1개만 가능 props는 객체로 들어온다 컴포넌트는 비구조할당 으로 정의하는게 좋다
    const user = {
        username: "test",
        password: "1234",
        name: "김준일",
    };

    const {username,name} = user;
    console.log(username);
    

    // {}를 사용하여 나타냄
    return <div>
        <label htmlFor={id}>{text}</label> 
        <input type="text" id={id}/>
    </div>
}

export default TextInput;