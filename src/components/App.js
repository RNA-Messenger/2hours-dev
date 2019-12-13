import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Filters from './Filters';
// import data from '../json/api.json';
import {fetchProducts, fetchMerchants} from './api/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterByTag = this.handleFilterByTag.bind(this);

    this.state = {
      fetchData: true,
      merchants: [],
      products: [],
      productsFiltered:[],
      tags:[],
      locations:[]
    };
        
  }

  arrangeTags(prod){
    let products = prod;
    let tagsToReduce = [];

    for (let p=0; p<products.length; p++){ 
      let tags = products[p].tags;
      for (let t=0; t<tags.length; t++){ 
        tagsToReduce.push(tags[t]);
      }
    }

    const tagsForSelect = tagsToReduce.reduce((u,i)=>{ return u.includes(i)? u : [...u, i]}, []);
    this.setState({ tags: tagsForSelect });
  }

  handleFilterByTag(tag){    
    const {products} = this.state;
    if(tag == 0){
      this.setState({ productsFiltered: products });
    } else {
      let tagFilteredStateProducts = [];
      for (let p=0; p<products.length; p++){ 
        for (let t=0; t<products[p].tags.length; t++){ 
          if (tag == products[p].tags[t]) 
          {
            tagFilteredStateProducts.push(products[p]);
          }
        }
      }
      this.setState({ productsFiltered: tagFilteredStateProducts });
    }
  }

  componentDidMount(){
    const {fetchData} = this.state;
    if (fetchData) 
    {
      fetchMerchants()
      .then((json) => {
        this.setState({ merchants: json });
      }) 

      fetchProducts()
      .then((json) => {        
        this.setState({ 
          products: json,
          productsFiltered:json 
        });
        this.arrangeTags(json);
      })
      this.setState({ fetchData: false });
    }
  }

  render(){         
    const {merchants, productsFiltered, tags} = this.state;
    return (
      <div className='appContainer'>
        <Header />
        <Filters tags={tags} filterByTag={this.handleFilterByTag} />
        <List merchants={merchants} products={productsFiltered} />
      </div>
     );
  }
}
