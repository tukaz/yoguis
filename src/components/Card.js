import React from 'react'

const Card = ({name,email,id}) => {
    return(
        <div className="bg-light-green dib pa2 br2 ma2 shadow-1 grow">
            <img alt="card" src={`https://robohash.org/${id}?200x200`} ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div> 
    )
}

export default Card;