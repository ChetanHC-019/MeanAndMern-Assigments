import React, { Component } from 'react'
import './Home.css'

 class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        ...this.props.currentIndex
      }
    }
    

    returnStateObject(){
        if(this.props.currentIndex===-1)
        return {
            name:"",
            job:""
         }
         else{
             return this.props.list[this.props.currentIndex]
         }
    }

    handleName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleJob=(event)=>{
        this.setState({
            job:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onAddOrEdit(this.state)

    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
        this.setState({...this.returnStateObject()})
    }


    render() {
        let {name,job}=this.state
        return (
            <div>
                
               <hr/>
                <h1>Add New Employee</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label  className="col-sm-2 col-form-label">Name</label>
                        <input type="text" value={name} onChange={this.handleName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Job</label>
                        <input type="text" value={job} onChange={this.handleJob} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </form>
            </div>
            
        )
    }
}

export default  Home