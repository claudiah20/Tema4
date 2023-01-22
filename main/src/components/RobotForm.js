import React, { Component } from 'react'
import store from '../stores/RobotStore'


class RobotForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            type : '',
            mass : ''
        }
        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
        this.add = () => {
            store.addRobot({name : this.state.name, type : this.state.type, mass : this.state.mass});
            }
    }
    render(){
        return <form>
            <legend>Robot form</legend>
            <label>name<input role="textbox" name="name" id="name"  onChange={this.handleChange} value={""} /></label>
            <label>type<input role="textbox" name="type" id="type"  onChange={this.handleChange} value={""}/></label>
            <label>mass<input role="textbox" name="mass" id="mass" onChange={this.handleChange} value={""}  /></label>
            <input type="button" value="add" onClick={this.add} />
        </form>
    }
}

export default RobotForm