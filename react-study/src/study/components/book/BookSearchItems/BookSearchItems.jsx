import { useState } from "react";
import "./style.css";
import React from 'react';

function BookSearchItems({bookList,setBookTableList}) {

    const [searchValue, setSearchValue] = useState({
        select: "bookName",
        text: "",
    });

    const searchOptions = [
        {
            id: 1,
            label: "도서명",
            value: "bookName",
        },
        {
            id: 2,
            label: "저자명",
            value: "author",
        },
        {
            id: 3,
            label: "출판사",
            value: "publisher",
        },

    ]

    const handleSearchValueOnChange = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleSearchButtonOnClick = () => {

        if(!searchValue.text.trim()) {
            setBookTableList(bookList);
            return;
        }

        const foundBooks = bookList.filter(book => book[searchValue.select].includes(searchValue.text)); //includes포함
        setBookTableList(foundBooks);
    }
    return (
        <div className='search-items'>
        <select name="select" value={searchValue.select} onChange={handleSearchValueOnChange}>
            {
                searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
            }
            
           
        </select>
        <input type="text" name='text' value={searchValue.text} onChange={handleSearchValueOnChange}/>
        <button onClick={handleSearchButtonOnClick}>검색</button>
    </div>
    );
}

export default BookSearchItems;