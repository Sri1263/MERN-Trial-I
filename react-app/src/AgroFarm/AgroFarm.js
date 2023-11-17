import React, { useState } from 'react';
import './AgroFarm.css'

const AgroFarm = () => {

    const [SID,setSID] = useState('')
    const [nodeType,setNodeType] = useState('')
    const [desc,setDesc] = useState('')

    const submitNodeData = async () => {
        const format = /^SID[0-9]{3}$/
        if(!format.test(SID))
        {
            alert('SID Format Mismatch. Expected Format : SID***')
            return
        }
        const nodeData = {SID,nodeType,desc}
        console.log(nodeData);
        let res = await fetch('http://localhost:3030/AgroFarm/product',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nodeData)
            }
        )
        res = await res.json()
        alert(`${nodeData.SID} Data Submitted`)
        console.log((`vandhuchu : ${res.message}`));
        // res = await JSON.parse(res.body)
        alert(`message received : ${res.message} `)
    }

    const getData = async () => {
        let res = await fetch('http://localhost:3030/AgroFarm/product',
            {
                method: 'GET'
            }
        )
        document.getElementById('DataDisplay').innerText = await res.text()
    }

    return (
        <>
            <div className='NodeForm'>
                <input type='text' className='field' onBlur={(e)=>setSID(e.target.value)} placeholder='SID' />
                <select className='field' onChange={(e)=>setNodeType(e.target.value)}>
                    <option value='' hidden>Node Type</option>
                    <option value='Sensor End' >Sensor End</option>
                    <option value='Sensor Edge' >Sensor Edge</option>
                </select>
                <input type='textarea' className='field' onBlur={(e)=>setDesc(e.target.value)} placeholder='Desc' />
                <input type='button' className='field' value='Submit Node Data' onClick={submitNodeData} />
            </div>
            <button onClick={getData}>GET Data</button>
            <fieldset>
                <legend>Data from API</legend>
                <div className='DataDisplay' id='DataDisplay'></div>
            </fieldset>
        </>
    );
}

export default AgroFarm;
