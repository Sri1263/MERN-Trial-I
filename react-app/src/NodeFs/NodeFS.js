import React from 'react';
import './NodeFS.css'

const NodeFS = () => {

    const handleClick = async (req_name) => {
        let res = await fetch(`http://localhost:3030/nodefs/${req_name}`,
            {
                method: 'GET'
            }
        )
        document.getElementById('Content').innerHTML = await res.text()
    }

    return (
        <>
            <div className='buttonList'>
                <input type='button' className='buttons' value='HTML-Index' onClick={(e)=>handleClick(e.target.value)} />
                <input type='button' className='buttons' value='JSON-Index' onClick={(e)=>handleClick(e.target.value)} />
            </div>

            <div id='Content'></div>

        </>
    );
}

export default NodeFS;
