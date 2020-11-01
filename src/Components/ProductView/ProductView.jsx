import React, { useState, useEffect } from "react";
import { useParams} from "react-router"
import "./ProductView.scss";
// import {connect} from 'react-redux'
// import {add_Item} from '../../Redux'
import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import peopeData from '../../JsonData/peopleInfo.json'


const ProductView = (props) => {
  // const { match } = props;

  // let {id1} = match.params;
  let { id1 } = useParams();
  // const id1=props.params.id;
  // const peopleInfo = peopeData.filter(data => {
  //   return data.id === ;
  // });
  // const {
  //   id,
  //   name,
  //   image,
  //   about,
  //   introduction,
  // } = peopleInfo;

  useEffect(() => {
   console.log('id  ',id1);
   console.log('id  ',peopeData);
  });

  const addCart = () =>{
    // swal(`Added to Cart.`, {
    //   icon: "success",
    // }); 
  }

  return (
    <div className="home_banner_area">
           	<div className="container box_1620">
           		<div className="banner_inner d-flex align-items-center">
					<div className="banner_content">
						<div className="media">
							<div className="d-flex">
								<img src="img/personal.jpg" alt=""/>
							</div>
							<div className="media-body">
								<div className="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>Donald McKinney</h3>
									<h4>Junior UI/UX Developer</h4>
									<p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
									<ul className="list basic_info">
										<li><a href="#"><i className="lnr lnr-calendar-full"></i> 31st December, 1992</a></li>
										<li><a href="#"><i className="lnr lnr-phone-handset"></i> 44 (012) 6954 783</a></li>
										<li><a href="#"><i className="lnr lnr-envelope"></i> businessplan@donald</a></li>
										<li><a href="#"><i className="lnr lnr-home"></i> Santa monica bullevard</a></li>
									</ul>
									<ul className="list personal_social">
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
      </div>
  );
};



export default ProductView 

