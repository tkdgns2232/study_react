import React, { useEffect, useState } from 'react';
import Route from './Route';

function RouterDom({ children }) {
    const [pathname, setPathname] = useState(window.location.pathname); // pathname이 변하면 렌더링을 다시한다.
    
    console.log(pathname)

    useEffect(() => {
        setPathname(window.location.pathname);
    },[window.location.pathname]);

    return (
        <div>
            {children}
        </div>
    );
}

export default RouterDom;