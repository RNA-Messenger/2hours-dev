import React, { Component } from 'react';
import './ListItem.css';
import { Carousel } from 'antd';

export default class ListItem extends Component {
    constructor() {
        super();
      }

    render(){
        const {merchant, product} = this.props;
              
        return (
            <li className='ListItemContainer'>
                <div className="ItemCardCarrousel"> 
                <Carousel autoplay>
                    {
                        product.image_urls.map(img =>{
                            return <div key={img} className='ImageContainer'> <img alt="fotito" src={'src/assets/'+ img +'.jpg'} /> </div>
                        })
                    }
                </Carousel>
                </div>
                <div className="ItemCardBody"> 
                    <header>
                        <div className='ItemCardBodyTitles'>
                            <h2>{product.title}</h2>
                            <h3>{merchant.title}</h3>
                        </div>
                        <span className='Itemprice'>{product.price} {product.currency}</span>
                    </header>
                    <main> <p> {product.description} </p> </main>
                    <footer>Buy</footer>
                </div>
            </li>
        );
    }
}