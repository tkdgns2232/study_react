import React, { useState } from 'react';
// 비동기

// 리액트에서 화면이 변하면 상태가 필요
function App4(props) {
    const [userInfo, setUserInfo] = useState({
        name: "",
        gender: "",
    });

    const [inputValue, setInputValue] = useState({
        name: "",
        gender: "male",
    });

     // e.target.value 이벤트가 일어난 타겟의 벨류
    const handleInputOnchange = (e) => {
        const {name,value} = e.target;

        setInputValue({
           ...inputValue,
           [name]: value,

        });
        
    }
    const handleOkonClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });
        setInputValue({
            ...inputValue,
            name:"",
        });
    }

    

    return (
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender}) </h1>
            <input type="text" name="nameText" onChange={handleInputOnchange} value={inputValue.name} />
            <input type="radio" id="male" name="gender" onChange={handleInputOnchange} cheaked={inputValue.gender === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleInputOnchange} cheaked={inputValue.gender === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOkonClick}>확인</button>  
        </div>
    );
}

export default App4;