function DataListLayout({ children }) {  // children은 자식요소가 생기면 작성한다

    console.log(children);
    
    const liList = [
        <li>5번리스트</li>,
        <li>6번리스트</li>,
        <li>7번리스트</li>,
        <li>8번리스트</li>,
    ];


    return <ul>
        {children}
        {liList}
        {
            children.map((li, index) => 
            <li key={index}>{"1" + li.props.children}</li> // <li>안에 있는 값은 props의 children이다
            )
        }
        {
            liList.map((li, index) =>
                <li key={index}>{"2" + li.props.children}</li>
            )
        }
    </ul>
}

export default DataListLayout;