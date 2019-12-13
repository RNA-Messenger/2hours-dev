import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem.js';

export default class List extends Component {
    constructor() {
        super();
      }

    isProductMerchantId(pId){
        const {merchants} = this.props;
        const merchantData = merchants.filter(m => pId == m.id);
        return merchantData[0];
    }

    render(){
        const {products} = this.props;

        return (
            <div className='ListContainer'>
                <ul>
                    { products.map(items=>{
                        return <ListItem key={items.id} merchant={this.isProductMerchantId(items.merchant_id)} product={items}/>
                        } 
                    )}
                </ul>
            </div>
        );
    }
}