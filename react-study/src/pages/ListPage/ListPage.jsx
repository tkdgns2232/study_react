/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function ListPage(props) {
    return (
        <div>
            <div>
                <input type='text' />
                <button>검색</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                </table>
                <div>

                </div>
            </div>
        </div>
    );
}

export default ListPage;