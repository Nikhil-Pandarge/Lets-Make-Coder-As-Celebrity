import React, { Component } from 'react'
import AllProducts from '../../Components/AllProducts/AllProducts'
import Style from './HomePage.module.scss'
import Footer from '../../Components/Footer/Footer'

class Homepage extends Component{
    render(){
        return(
            <div className={Style.main}>
                <AllProducts/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage