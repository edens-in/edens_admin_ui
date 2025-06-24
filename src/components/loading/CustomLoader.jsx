import React from 'react'; 

import BookLoader from '../../assets/book_loader.gif'; 
import Loading from "../../assets/332.gif"; 
const CustomLoader = () => { 


    return ( 
        <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img 
                src={BookLoader}
                alt='Loading animaton'
                style={{width: '80px', height: '80px', objectFit: 'cover'}}
            />
            <span className='paragraph1'>Loading...</span>

        </div>
    )
}

export default CustomLoader;    