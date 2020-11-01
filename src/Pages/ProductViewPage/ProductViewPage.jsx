import React, { Component } from 'react'
import ProductView from '../../Components/ProductView/ProductView'
import Style from './ProductViewPage.module.scss'
import Footer from '../../Components/Footer/Footer'


class ProductViewPage extends Component{
    render(){
        return(
            <div className={Style.main}>
                <ProductView/>
                <Footer/>
            </div>
        )
    }
}

export default ProductViewPage