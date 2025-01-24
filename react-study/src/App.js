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
import { useQuery } from "react-query";
import { accessTokenAtomState } from "./atoms/authAtom";

function App() {
  // 0이면 로그인 x  useRecoilState는 전역상태를 만들어야 쓸수있다
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtomState);

  useEffect(() => {
    authenticatedUserQuery.refetch();
  }, [accessToken]);

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
    authenticatedUser, // 함수
    {
      retry: 0,  // 실패하면 요청날리는 코드
      refetchOnWindowFocus: false,
      enabled: !!accessToken, // ture이면 작동 false면 실행 x
      
    } // 옵션
  );

  console.log(authenticatedUserQuery.isLoading);
  
  return (
    <>
      <Global styles={global} />
      {
        authenticatedUserQuery.isLoading 
        ? 
          <></> // ture이면 아무화면이 안보인다.
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