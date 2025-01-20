
import ReactDOM from 'react-dom/client';
import App from './App';

import RouterDom from './components/RouterDom/RouterDom';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
); // 이 코드가 있어야만 브라우저 라우터 가능

// root.render(<App />);
// root.render(<App2 />);
// root.render(<App3 />);
// root.render(<App4 />);
// root.render(<App5 />);
// root.render(<App6 />);
// root.render(<App7 />);
// root.render(<App8 />);
// root.render(<App9 />);
// root.render(<App10 />);
// root.render(<App11 />);
// root.render(<App12 />);
// root.render(<App13 />);
// root.render(<App14 />);
// root.render(<App/>);

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
