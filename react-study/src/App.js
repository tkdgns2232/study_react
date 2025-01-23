import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authUserIdAtomState } from "./atoms/authAtom";
import { useQuery } from "react-query";

function App() {
  // 0이면 로그인 x  useRecoilState는 전역상태를 만들어야 쓸수있다
  const location = useLocation();

  const authenticatedUser = async () => {
      return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,   
        }
      });
    }
    // return response는 promise형태의 then
  

  const authenticatedUserQuery = useQuery(
    ["authenticatedUserQuery"], // 키값 배열
    authenticatedUser, 
    {
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"), // ture이면 작동 false면 실행 x
      
    }
  );
  
  return (
    <>
      <Global styles={global} />
      {
        authenticatedUserQuery.isLoading ? <></>
        :
      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={<ListPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

        
        </Routes>
      </MainLayout>
      } 
    </>
  );
}

export default App;