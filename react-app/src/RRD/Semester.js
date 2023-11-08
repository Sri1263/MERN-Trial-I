import React from 'react';
import { useNavigate } from 'react-router-dom';

const Semester = () => {
    const nav = useNavigate()
    return (
        <div>
            <ol>
                <li>Semester 1</li>
                <li>Semester 2</li>
                <li>Semester 3</li>
                <li>Semester 4</li>
                <li>Semester 5</li>
                <li>Semester 6</li>
                <li onClick={()=>nav('/sem7')}>Semester 7</li>
                <li>Semester 8</li>
            </ol>
        </div>
    );
}

export default Semester;
