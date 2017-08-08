import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Employee from './Employee'
import EmployeeApi from '../../api/employeeApi'

class EmployeeDirectory extends Component {
    constructor(props) {
        super(props)
        this.EmployeeApi = new EmployeeApi()

        this.state = {
            employees: this.EmployeeApi.getEmployees()
        }
    }

    render() {
        let match = this.props.match
        return (
            <div className="row">
                <div className="col-xs-3">
                    <ul>
                        {
                            this.state.employees.map((employee) => {
                                return <li key={employee.id}><Link to={`${match.url}/${employee.id}`}>{employee.name}</Link></li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-xs-9">
                    <Route path={`${match.url}/:employeeId`} component={Employee} />
                </div>
            </div>
        )
    }
}

export default EmployeeDirectory