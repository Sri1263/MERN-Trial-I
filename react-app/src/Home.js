import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const nav = useNavigate()

    return (
        <>
          <div>
                <ol>
                    <li onClick={()=>nav('/agro')}>Agro Farm</li>
                    <li onClick={()=>nav('/nodefs')}>Node fs</li>
                    <li onClick={()=>nav('/rrd')}>React Router Dom</li>
                </ol>
            </div>  
        </>
    );
}

export default Home;
