import React from "react";
import '../trends/ItemTrendTitle.css'
import ImagePerson2 from '../../../assets/Pictures/peep-9.svg'




const ItemTrendTitle = () => {
    return (
        <div className="title">
            <div >
                <img src={ImagePerson2} alt="" className="ml-96"/>
            </div>
            <h1 className="flex justify-end mr-7" >Tendencias de NFT</h1>
        </div>
    )
}

export default ItemTrendTitle