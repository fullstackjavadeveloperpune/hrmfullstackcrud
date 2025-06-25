import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditEmployee = () => {

    const {empId} = useParams()

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
        empName: "",
        empAddress: "",
        empSalary: ""
    })

    useEffect(()=>{
        loadEmployee()
    }, [])

    const { empName, empAddress, empSalary } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {

        e.preventDefault()
        await axios.put(`http://localhost:8080/employees/update/${empId}`, employee)

        navigate('/')
    }

    const loadEmployee = async()=>{
        const result = await axios.get(`http://localhost:8080/employees/findbyid/${empId}`)

        setEmployee(result.data)
    }
    return (
        <div className='container'>

            <div className='row'>

                <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>
                            Name<input type='text' name='empName' value={empName} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Address<input type='text' name='empAddress' value={empAddress} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Salary<input type='number' name='empSalary' value={empSalary} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-success'>Edit Employee</button>

                    </form>
                </div>

            </div>

        </div>
    )
}
