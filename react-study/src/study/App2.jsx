import { useState } from "react";
/** 
    useState 상태관리
 * 
 * 
*/

function App2() {
    const [num,setNum] = useState(0);

    let number = 0;

    console.log(num);
    console.log(number);

    const handleIncreaseOnClick = () =>{
        if(num > 8){
            return
        }else 
        setNum(num + 1); //set

    }
    
    const handleDecreaseOnClick = () =>{
        if(num < -8){
            return
        }else
        setNum(num - 1); //set
    }

    
    return <>
        <h1>{num}</h1> 
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick}>1감소</button>
    </>
}

export default App2;