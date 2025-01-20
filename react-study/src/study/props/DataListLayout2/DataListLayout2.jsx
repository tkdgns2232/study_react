
function DataListLayout2({dataList}) { // key값을 추가해줘야 한다.

    return <ul>
        {
            dataList.map((data, index) =>
                <li key={index}>{data}</li>
            )
        }
    </ul>;
}

export default DataListLayout2;