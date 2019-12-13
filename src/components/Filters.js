import React, { Component } from 'react';
import './Filters.css';
import { Input } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

export default class Filter extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        
        this.state = {
            tags:this.props.tags
        };
    }

    filterData(value, filter){
        filter(value);
    }

    onChange(value) {
        console.log(`selected ${value}`);
    }
      
    onSearch(val) {
        console.log('search:', val);
    }

    render(){
        const {tags, filterByTag} = this.props;
        
        return (
            <div className='FiltersContainer'>
                <div className='LocationFilter'>
                    <Input placeholder="Please latitude, longitude" />
                </div>

                <Select
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    defaultValue="0"
                    onChange={this.onChange}
                    onSelect={this.filterData, filterByTag}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    { tags.map((t,i)=>{return <Option key={i} value={t}>{t}</Option>})}
                    <Option key="0" value="0"> See all tags </Option>
                </Select>
            </div>
        );
    }
}