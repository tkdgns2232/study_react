
import ReactDOM from 'react-dom/client';
import Hello from './study/Hello/Hello';
import App2 from './study/App2';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(<App2 />);

// import ReactDOM from 'react-dom/client';
// import Hello from './study/Hello/Hello';
// import Hello2, { printConsole, printConsole2 } from './study/Hello2/Hello2';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Hello2 />); // 태크를 만들어서 쓸 수 있다

// printConsole();
// printConsole2();
// default가 없으면 무조건 {}로 감싸서 들고온다.
// 컴퍼런트는 default를 쓴다.
// default는 하나만 가능 람다랑 비슷하다.
