import React, { useState, useEffect } from "react";
import Style from "./ProductCard.module.scss";
import swal from "sweetalert";
// import PIC from "../../Assets/Images/burger.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductCard = ({info, handleClick}) => {
  const [textShow, setTextShow] = useState(false);
  const [divshow, setdivshow] = useState("nodivshow");

  const {
    id,
    name,
    image,
    about,
    introduction,
  } = info;
  const onhandleClick = () => {
    console.log("res_id: ", id);
    handleClick(id);
  };
  useEffect(() => {
    if (textShow) {
      setdivshow("divshow");
    } else {
      setdivshow("nodivshow");
    }
  });


  const addCart = () =>{
    // swal(`Added to Cart.`, {
    //   icon: "success",
    // }); 
  }

  return (
    <a href="#" onClick={(e)=>{e.preventDefault()}}>
    <div className={Style.productCard}
      onMouseEnter={() => setTextShow(true)}
      onMouseLeave={() => setTextShow(false)}
      onClick={onhandleClick}
    >
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${image})`}}
        />
        
        <div className={Style.container1}>
          <h3 className={Style.restaurantName}>
            <b>{name}</b>
          </h3>
          <h3><b>{introduction}</b></h3>
        </div>
      </div>
      </a>
  );
};


export default ProductCard 

