import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ShowEmployee = () => {

    const [employees, setEmployees]= useState([])

    useEffect(()=>{
        loadEmployees()
    }, [])

    const loadEmployees = async()=>{
        const result = await axios.get("http://localhost:8080/employees/findall")

        setEmployees(result.data)
    }

    const deleteEmployee = async(empId)=>{
        await axios.delete(`http://localhost:8080/employees/deletebyid/${empId}`)

        loadEmployees()
    }

  return (
    <div className='container'>

        <div className='row'>

            <Link to={`/addemployee`} className='btn btn-info'>Add Employee</Link>
            <table className='table table-striped'>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((employee)=>(
                            <tr>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empAddress}</td>
                                <td>{employee.empSalary}</td>

                                <td>

                                    <Link to={`/edit/${employee.empId}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger' onClick={()=> deleteEmployee(employee.empId)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>

    </div>
  )
}
