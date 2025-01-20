import React, { useState } from 'react';

function App13(props) {

    const getUser = (username) => {
        const userList = [
            {
                username: "aaa",
                name: "김준일",
            },
            {
                username: "bbb",
                name: "김준이",
            },
            {
                username: "ccc",
                name: "김준삼",
            },
        ];
        
        return new Promise((resolve, reject) => {
            const foundUser = userList.find(user => user.username === username);
            if(!!foundUser) { // boolean 강조를 위해 !!사용
                resolve(foundUser);
            }else{
                reject(new Error("사용자를 찾지 못함."));
            }
        });
    }

    // 토큰만들때 user필요
    const generateToken = (user) => {
        return new Promise((resolve,reject) => {
            if(!!user) {
                resolve("새로만든 토큰!");
            }else {
                reject(new Error("토큰 생성 실패!"));
            }
        });
    }

    const generateToken2 = async (user) => {
        
            if(!user) {
                throw new Error("토큰 생성 실패!");
            }
            return "새로만든 토큰!";
            
        };
    

    const[username, setUsername] = useState();

    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value);
    }

    const handleButtonOnClick = () => {
        let user = null;

        getUser(username)
        .then(result => {
            user = result;
            generateToken(user)
            .then(token => console.log(token));
        })
        .catch(error => console.error(error));

        
    }

    // async function handleButtonOnClick2 () {
    //     const result = await getUser(username); // promise를 리턴하는 함수 앞에 await 사용
    //     const token = await generateToken(result);
    //  }
    
    /** 
     * async 키워드를 함수에 사용하면 리턴 자료형이 Promise객체가 된다.
     * 
     * async와 await 키워드 사용 조건
     * 1. await은 async 함수 안에서만 사용가능.
     * 2. await은 promise를 return하는 함수에만 사용가능.
     *      === Promise 객체 앞에 사용할 수 있다.
     * 3. 예외처리시 주의점
    */

    const handleButtonOnClick2 = async () => { //익명함수 async를 사용하면 무조건 리턴값이 Promise가 된다. async를 사용해서 비동기로 하겠다
        try{
            const result = await getUser(username);  // promise를 리턴하는 함수 앞에 await 사용
            console.log(result);
            const token = await generateToken(result); // then에서 넘겨줄값을 바로 들고 온다.
            console.log(token);
        } catch(error) {
            console.error(error);
        }
       
    }


    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameOnChange}/>
            <button onClick={handleButtonOnClick}>토큰 생성</button>
            <button onClick={handleButtonOnClick2}>토큰 생성2</button>

        </div>
    );
}

export default App13;