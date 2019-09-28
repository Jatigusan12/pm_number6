import React, {Component} from 'react';

class RenderArray extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: [],
          fname: '',
          lname: '',
          age: 0
        }
      }
    
      handleAddToList = (e) => {
        const {list, fname, lname, age} = this.state;
        e.preventDefault();
        list.push("First Name:"+fname +"\n Last Name: "+lname+"\n Age: "+age +"\n");
        this.setState({fname : "",lname : "",age : 0})
        console.log(list)
      }
      render() {
        return (
          <div>
            <div>First Name<input onChange = {e => this.setState({fname : e.target.value})} /></div>
            <div>Last Name<input onChange = {e => this.setState({lname : e.target.value})}/></div>
            <div>Age<input type="number" onChange = {e => this.setState({age : e.target.value})}/></div>
            <div><button onClick={e => this.handleAddToList(e)}>Add</button></div>
          </div>
        )
      }
    }

    export default RenderArray;
