import React, { Component } from 'react'
import Home from './Home'

class Employees extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex:-1,
            list: this.returnList()
        }

    }
    returnList() {
        if (localStorage.getItem('employeeData') == null)
            localStorage.setItem('employeeData', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('employeeData'))
    }


    onAddOrEdit = (data) => {
        var list = this.returnList()
        if(this.state.currentIndex===-1)
        list.push(data)
        else
        list[this.state.currentIndex]=data
        localStorage.setItem('employeeData', JSON.stringify(list))
        this.setState({ list,currentIndex:-1 })
    }

    handleEdit=(index)=>{
       this.setState({
           currentIndex:index
       })
    }

    handleDelete=(index)=>{
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('employeeData', JSON.stringify(list))
        this.setState({ list,currentIndex:-1 })
    }

    render() {
        return (
            <div>
                <Home onAddOrEdit={this.onAddOrEdit} currentIndex={this.state.currentIndex} list={this.state.list} />
                <br/>
                <h2>Employee details</h2>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>job</th>
                            <th>Edit</th>
                            <th>remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item ,index)=>
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.job}</td>
                                <td><button className='btn btn-secondary' onClick={()=>this.handleEdit(index)} >Edit</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.handleDelete(index)}>delete</button></td>
                                </tr>
                            )
                        }
                         </tbody>
                </table>
            </div>
        )
    }
}
export default Employees
