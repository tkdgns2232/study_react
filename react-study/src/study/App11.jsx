import React from 'react';

/** 
 * 비동기
 * 
 * Promise(resolve,reject)
 * then, catch, finally
 * 
 * async / await
 * try, catch, finally
 *    
 * callback :매개변수로 전달하는걸 콜백함수라한다.
 */


function App11(props) {

    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3")
    //     }, 2000);
    // }, 3000); // 3초후에 동작

    // resolve 결정하다
    // reject 거부하다
    const isSuccess = false;
    const isSuccess2 = true;
    console.log("1번");
    // 생성만해도 호출가능
    const p1 = new Promise((resolve,reject) => {   // promise는 함수 정의 필요
        console.log("Promise1 생성!!");

        if(isSuccess) {
            resolve(); // true면 resolve호출
        }else {
            reject(); // false면 reject호출
        }
    });

    // promise를 쓰면 then,catch,finally사용가능
    // then은 예약 개념
    // p1.then(() => { // resolve가 호출되면 then 호출
    //     console.log("p1 then 호출");
    // }).then(() => {
    //     console.log("p1 2번째 then 호출"); // then에서 then으로도 호출이 가능하다
    // }).catch(()=> {
    //     console.log("p1 catch 호출");
    // }); 

    p1.then(() => { // resolve가 호출되면 then 호출
        console.log("p1 then 호출");
    }).catch(()=> {
        console.log("p1 catch 호출");
    }); 

    console.log("2번");

    const p2 = new Promise((resolve,reject) => {   // promise는 함수 정의 필요
        console.log("Promise2 생성!!");
        
        if(isSuccess2) {
            resolve(); // true면 resolve호출 
        }else {
            reject(); // false면 reject호출
        }
    });
    
    p2.then(() => {
        console.log("p2 then 호출");
    }).then(() => {
        console.log("p2 2번째 then 호출");
    })

    const p3 = new Promise((resolve,reject) => {  
        console.log("Promise3 생성!!");
        
        const response = {
            status: 200,
            data: {
                username: "aaa",
                password: "1234",
            }
        }

        if(true) {
            resolve({response}); // response: response처럼 key, value값이 같으면 생략하고 하나만 사용할 수 있다. 
        }else {
            reject();
        }
    });

    p3.then((r) => {
        console.log(r);
        // if(true) {
        //     throw new Error("오류!!!");
        // }
        return {
            response: {
                ...r.response,
                data: {
                    ...r.response.data,
                    name: "김준일",
                    email: "aaa@gmail.com",
                }
            }
        }
    }).then((r) => {
        console.log(r);
    }).catch((error) => {
        console.error(error);
    });

   

    const p4 = new Promise((resolve,reject) => {  
        console.log("Promise4 생성!!");
        
        const response = {
            status: 400,
            data: {
               errorMassage: "문자열 형식이 맞지 않습니다.",
            },
        }

        if(false) {
            resolve({response}); 
        }else {
            reject(new Error(JSON.stringify({response})));
        }
    });

    p4.catch((error) => {
        console.error(error);
    });

    return (
        <div>
            
        </div>
    );

   

}

export default App11;