/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function SigninPage(props) {
    const [searchParams] = useSearchParams(); 
    const [ inputRefs ] = useState([useRef(), useRef(), useRef(), useRef() ]); //queryselect 대신 Refs 사용한다
    const [ buttonRefs ] = useState([ useRef() ]); 
    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
    });
    
    useEffect(() => {
        setInputValue({
            ...inputValue,
            username: searchParams.get("username"),
        })
    },[searchParams.get("username")]);

    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputOnkeyDown = (e) => {
        if(e.keyCode === 13){
            let foundIndex = -1; // 초기값을 -1로 설정
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

    const handleSigninSubmitOnClick = async () => {
        try{
            const response = await axios.post("http://localhost:8080/servlet_study_war/api/signin", inputValue);
            console.log(response);
        }catch (error){
            console.error(error);
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
                
                <button onClick={handleSigninSubmitOnClick} ref={buttonRefs[0]}>로그인</button>
                
            </div>
            <div css={s.footer}>
                <span>계정이 없으신가요?</span>
                <Link to={"/singup"}>회원가입</Link>
            </div>
        </div>
    );
}

export default SigninPage;