import { useState } from "react";
import product from "../data/product";

export function Product(){
    let [Menu, setMenu] = useState('all');
    let [productInfo, setProductInfo] = useState(product);

    return(
        <div className="product content">
            <div className="inner">
                <h2 className="title">product</h2>
                <div className='tab_btn'>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('all');}}>ALL</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('new');}}>NEW</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('best');}}>BEST</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('frame');}}>FRAME</a>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setMenu('stuff');}}>STUFF</a>
                </div>
                <div className="wrap">
                    {
                        productInfo.map((e,i)=>{
                            return(
                                (Menu == 'all')
                                ?<ProductBox key={i} item={e}></ProductBox>
                                :(Menu == e.category)
                                ?<ProductBox key={i} item={e}></ProductBox>
                                :null
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
function ProductBox(props){
    let item = props.item
    let baseUrl = '../../images/tab_menu/';
    let imgSrc = baseUrl + item.imgSrc;
    return(
        <div className="ProductBox">
            <img src={imgSrc} alt=""/>
            <div className="info">
                <div className="name"></div>
                <div className="price"></div>
            </div>
        </div>
    )
}