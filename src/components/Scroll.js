import React from 'react'

const Scroll = ({children}) => {
    return(
        <div style={{overflowY:"scroll",height:"500px",border:"5px solid black"}}>
            {children}
        </div>
    )
}


export default Scroll;