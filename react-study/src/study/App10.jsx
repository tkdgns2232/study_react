import React, { useEffect, useState } from 'react';

function App10(props) {
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const unmount = () => {
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨2");
        return unmount;
    }

   

    useEffect(mount); 

    useEffect(() => { // []는 의존성을 가짐
        console.log(num1); 
        setNum2(num1 + 100);
    }, [num1]);

    useEffect(() => {
        console.log(num2);
    }, [num2]);

    useEffect(() => {
        console.log(num1);
        console.log(num2);        // 둘중에 하나라도 변하면 실행
    }, [num1, num2] );

    useEffect(() => {
        console.log("마운트!!!");
    }, []);

    const handleOnClick = () => {
        setNum1(num1 + 10);
        
    }
    // 집가서 다시 공부하기

    console.log("????????");

    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>
            
            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;
   
