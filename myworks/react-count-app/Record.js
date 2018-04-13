import React, { Component } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

export default class Record extends Component {
    constructor(props){
        super(props);
        this.state={
            edit:false
        };
        this.editToggle=this.editToggle.bind(this);
        this.Update=this.Update.bind(this);
    }

    editToggle(){
        this.setState({
            edit:!this.state.edit
        })
    }

    handleDelete(e){
        e.preventDefault();
        axios.delete(`https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records/${this.props.recordList.id}`).then(
            response=>this.props.handleDeleteRecord(this.props.recordList)
        ).catch(
            error=>console.log(error.message)
        )

    }

    Update(event){
        event.preventDefault();
        const inputValue={
            date:this.date.value,
            title:this.title.value,
            amount:Number.parseFloat(this.amount.value)
        };
        // console.log(inputValue)
        axios.put(`https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records/${this.props.recordList.id}`,
            inputValue).then(
            response=>{
                this.setState({edit:false});
                this.props.handleEditRecord(this.props.recordList,response.data)
            }
        ).catch(
            error=>console.log(error.message)
        )
    }

    recordRaw(){
        return (
            <tr>
                <td>{this.props.recordList.date}</td>
                <td>{this.props.recordList.title}</td>
                <td>￥{this.props.recordList.amount}</td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.editToggle}>修改</button>
                    <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>删除</button>
                </td>
            </tr>
        );
    }

    recordInput(){
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.recordList.date} ref={input=>this.date=input} /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.recordList.title} ref={input=>this.title=input} /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.recordList.amount} ref={input=>this.amount=input} /></td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.Update}>更新</button>
                    <button className="btn btn-danger" onClick={this.editToggle}>取消</button>
                </td>
            </tr>
        );
    }

    render() {
            if(this.state.edit){
                return this.recordInput();
            }
            else{
                return this.recordRaw();
            }
    }
}
Record.propTypes={
    id:propTypes.string,
    date:propTypes.string,
    title:propTypes.string,
    amount:propTypes.number
};