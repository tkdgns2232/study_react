/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage(props) { 
    const navigate = useNavigate(); 
    const [ inputRefs ] = useState([useRef(), useRef(), useRef(), useRef() ]); //queryselect 대신 Refs 사용한다
    const [ buttonRefs ] = useState([ useRef() ]); 
    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });
    
    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputOnkeyDown = (e) => {
        if(e.keyCode === 13){
            let foundIndex = -1;
            for(let i = 0; i < inputRefs.length; i++){ // Refs 마지막까지 반복돌린다.
                if(inputRefs[i].current === e.target) { // 엔터가 들어간 현재 Refs
                    foundIndex = i;
                    break;
                }
            }

            if(foundIndex === inputRefs.length - 1) {
                buttonRefs[0].current.click();    // 마지막인덱스이면 버튼 클릭해라
                return;
            }
            inputRefs[foundIndex + 1].current.focus();
        }
    }

    const handleSignupSubmitOnClick = async () => {
        try{
            const response = await axios.post("http://localhost:8080/servlet_study_war/api/signup", inputValue);
            console.log(response);
            alert("회원가입 완료!!");
            navigate(`/signin?username=${response.data.data.username}`); // navigate는 페이지이동할때 사용하는 코드
        }catch (error){
        
        }
    }
    return (
        <div css={s.layout}>
            <div css={s.main}>
                <input type="test" 
                    placeholder='사용자 이름' 
                    name='username' 
                    value={inputValue.username} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnkeyDown} 
                    ref={inputRefs [0]} />
                <input type="password" 
                    placeholder='비밀번호' 
                    name='password' 
                    value={inputValue.password} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnkeyDown} 
                    ref={inputRefs [1]} />
                <input type="test" 
                    placeholder='성명' 
                    name='name' 
                    value={inputValue.name} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnkeyDown} 
                    ref={inputRefs [2]} />
                <input type="test" 
                    placeholder='이메일 주소' 
                    name='email' 
                    value={inputValue.email} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnkeyDown} 
                    ref={inputRefs [3]} />
                <button onClick={handleSignupSubmitOnClick} ref={buttonRefs[0]}>가입</button>
                
            </div>
            <div css={s.footer}>
                <span>계정이 있으신가요?</span>
                <Link to={"/singin"}>로그인</Link>
            </div>
        </div>
    );
}

export default SignupPage;