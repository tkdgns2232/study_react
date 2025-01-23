
import ReactDOM from 'react-dom/client';

import App from './App';

import RouterDom from './components/RouterDom/RouterDom';
import { BrowserRouter } from 'react-router-dom';

import Hello from './study/Hello/Hello';
import App2 from './study/App2';
import App3 from './study/App3';
import App4 from './study/App4';
import App5 from './study/App5';
import App6 from './study/App6';
import App7 from './study/App7';
import App8 from './study/App8';
import App9 from './study/App9';
import App10 from './study/App10';
import App11 from './study/App11';
import App12 from './study/App12';
import App13 from './study/App13';
import App14 from './study/App14';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
    <RecoilRoot> 
        <QueryClientProvider client={queryClient}> 
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        </QueryClientProvider>   
    </RecoilRoot>
    
); // 이 코드가 있어야만 브라우저 라우터 가능




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
