import React, { useEffect, useState,useRef } from 'react'
import Style from './AllProducts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {connect} from 'react-redux'
// import {setXPosition,fetchProductList,fetchProductInfo,setImage,add_Item} from '../../Redux'
import ProductCard from '../ProductCard/ProductCard'
import peopeData from '../../JsonData/peopleInfo.json'
import { useHistory } from "react-router";


const AllProducts = ({setImage,fetchProductInfo,}) => {
    const [search, setSearch] = useState("");
    const history = useHistory();

    const onChange = e => {
        setSearch(e.target.value);
    };

    const handleClick = (id) => {
        console.log("id1: ", id);
        history.push(`/CoderView/${id}`);
      };

    useEffect(()=>{
       
    },[]);

    const peopleInfo = peopeData.filter(data => {
        return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

    return(
        <div className={Style.main} >
            <div className={Style.filterhead}>
                
                <span  className={Style.topPick}>
                    <b>Coder Celebrities</b>
                </span>
                <input
                    className={Style.filter+' '+Style.inputs}
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={search}
                    // autoComplete="off"
                    placeholder="Search Celibrities By Name"
                />
            </div>
            
            <div className={Style.productCards}>
                {peopleInfo &&
                peopleInfo.map(data => (
                    <ProductCard key={data.id} info={data} handleClick={handleClick} />
                ))}
            </div>
        </div>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         uiData: state.uiReducer,
//         FetchedData: state.AxiosReducer
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         setXPosition: x => dispatch(setXPosition(x)),
//         fetchProductList: url =>dispatch(fetchProductList(url)),
//         fetchProductInfo: id =>dispatch(fetchProductInfo(id)),
//         setImage: image =>dispatch(setImage(image)),
//         add_Item: item => dispatch(add_Item(item))
//     }
// }

export default AllProducts