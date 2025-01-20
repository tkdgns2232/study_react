/**@jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import React from 'react';

import { LuUserRoundPlus, LuLogIn, LuLayoutList, LuNotebookPen } from "react-icons/lu";

// Link 는 a태그 같은 역할을 한다 a태그는 전체 렌더링을 하지만 Link는 부분만 랜더링한다.
function MainHeader(props) {
    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"}><h1>미니 게시판 프로젝트</h1></Link>
                <ul>
                    <Link to={"/list"}>
                        <li>
                            <LuLayoutList />게시글 목록
                        </li>
                    </Link> 
                    <Link to={"/write"}>
                        <li>
                            <LuNotebookPen />게시글 작성
                        </li>
                    </Link> 
                </ul>
            </div>
            <div css={s.rightContainer}>
                <ul>
                    <Link to={"/signin"}>
                        <li><LuLogIn/>로그인</li>
                    </Link> 
                    <Link to={"/singup"}>
                        <li><LuUserRoundPlus />회원가입</li>
                    </Link> 
                </ul>
            </div>
        </div>
    )
}

export default MainHeader;