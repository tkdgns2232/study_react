import React, { useState } from 'react';
// 비동기

// 리액트에서 화면이 변하면 상태가 필요
function App3(props) {
    const [name, setName] = useState("");
    const [gender,setGender] = useState("");
    const [nameInputValue, setNameInputValue] = useState(""); // 상태 한개 더 추가 
    const [genderInputValue, setGenderInputValue] = useState("male");

    console.log(nameInputValue);

    const handleNameInputOnchange = (e) => {
        setNameInputValue(e.target.value); // e.target.value 이벤트가 일어난 타겟의 벨류
        
    }

    const handleGenderInputOnChange = (e) => {
        setGenderInputValue(e.target.value);
    }

    const handleOkonClick = () => {
        setName(nameInputValue); // e.target.value 이벤트가 일어난 타겟의 벨류
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여");
    }

   
    return (
        <div>
            <h1>이름: {name}({gender}) </h1>
            <input type="text" onChange={handleNameInputOnchange} value={nameInputValue} />
            <input type="radio" id="male" name="gender" onChange={handleGenderInputOnChange} cheaked={genderInputValue === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderInputOnChange} cheaked={genderInputValue === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOkonClick}>확인</button>  
        </div>
    );
}

export default App3;