<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/Write/WritePage";
import { Global } from "@emotion/react";
import {global} from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {

  return (
    <>
      <Global styles={global} />

      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage/>} /> 
          <Route path="/write" element={<WritePage/>} />
        </Routes>
      </MainLayout>   
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> c7f48417f82e2c7f411ec83f043402e63c4a9f07
  );
}

export default App;
