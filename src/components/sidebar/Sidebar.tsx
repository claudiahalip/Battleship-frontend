import React from 'react';
import Instructions from './Instructions';

const Sidebar: React.FC = function(){
    return(
        <div>
            <Instructions/>
            <button className='start-now-button' type='button'>Start now</button>
        </div>
    )
    
}

export default Sidebar