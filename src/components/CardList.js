import React from 'react'
import Card from './Card'

const CardList = ({yoguis}) => {
    const yoguisCard = yoguis.map((yogui,i)=> {
        return <Card key={i} id={i} name={yogui.name} email={yogui.email} />
    });
    return(
        <div>
            {yoguisCard}
        </div>
    )
}

export default CardList