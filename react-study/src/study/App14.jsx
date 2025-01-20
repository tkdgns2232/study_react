import axios from 'axios';
import React from 'react';
function App14(props) {


    const handleRequestOnClick =async () => {
        let response = null;
        try {
            response = await axios.get("http://localhost:8080/servlet_study_war/api/user"); //axios로 요청한다 get을 호출하면 리턴이 promise가된다.
            console.log(response);
            console.log(response.data.username);
        } catch (error){
            console.error(error);

        }
    }

    const handleBookRequestOnClick = async () => {
        let response = null;
        try {
            response = await axios.get("http://localhost:8080/servlet_study_war/api/book"); //axios로 요청한다 get을 호출하면 리턴이 promise가된다.
            console.log(response);
            console.log(response.data.bookId);
        } catch (error){
            console.error(error);

        }
    }
<<<<<<< HEAD
    
    
=======

>>>>>>> c7f48417f82e2c7f411ec83f043402e63c4a9f07
    /**
     * BookRestServlet(/api/book)
     * get 요청
     * bookId,
     * bookName,
     * author,
     * publisher,
     * category,
     * imgUrl
     */

    return (
        <div>
            <button onClick={handleRequestOnClick}>요청</button>
            <button onClick={handleBookRequestOnClick}>도서요청</button>

        </div>
    );
}

export default App14;