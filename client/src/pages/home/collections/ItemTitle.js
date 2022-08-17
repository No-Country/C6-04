import React from "react";
import picturePerson from '../../../assets/Pictures/peep-7.svg'
import '../collections/ItemTitle.css'
const ItemTitle = () => {
    return (
        <div className="title flex ml-8 ">
            <h1 className="mt-7">Colecciones</h1><img src={picturePerson} alt=""/>
        </div>
    )
}

export default ItemTitle