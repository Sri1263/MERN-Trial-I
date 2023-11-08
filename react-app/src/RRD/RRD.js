import React from 'react';
import { Link } from 'react-router-dom';

const RRD = () => {
    return (
        <div>
            <ol>
                <li><Link to={'/about'}> About </Link></li>
                <li><Link to={'/semester'}> Semester </Link></li>
            </ol>
        </div>
    );
}

export default RRD;
