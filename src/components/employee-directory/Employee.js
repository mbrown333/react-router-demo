import React, { Component } from 'react'
import EmployeeApi from '../../api/employeeApi'

class Employee extends Component {
    constructor(props) {
        super(props)
        this.EmployeeApi = new EmployeeApi()

        this.state = { employee: this.EmployeeApi.getEmployeeById(+this.props.match.params.employeeId) }
    }

    componentWillReceiveProps(props) {
        this.setState({
            employee: this.EmployeeApi.getEmployeeById(+props.match.params.employeeId)
        })
    }

    render() {
        let employee = this.state.employee
        return (
            <div>
                <strong>Name: </strong> {employee.name}<br/>
                <strong>E-mail: </strong> {employee.email}<br/>
                <strong>Phone: </strong> {employee.phone}<br/>
            </div>
        )
    }
}

export default Employee