import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Admin = ({employees,api, setEmployees}) => {
    //console.log(api)
    const [form, setForm] = useState({
    name: "",
    lastname: "",
    position: ""
  });

    const handleSubmit = async (e) => {
    e.preventDefault() // prevent ไม่ให้ refresh page default
      await axios.post(`${api}/members`, form);
      setEmployees([...employees, form]);
            setForm({
    name: "",
    lastname: "",
    position: ""
  })
  }

  const handleChange = (e) => {
    //console.log(form)
    setForm({...form, [e.target.name]: e.target.value})
  }

      const handleDelete = async (id) => {
      if (!window.confirm("Delete this user?")) { return;
        
      }
      await axios.delete(`${api}/member/${id}`)
      setEmployees(employees.filter((employee) => employee.id !== id))
      // fetchUsers();
    }


  return (
    <div>
        <div className='flex flex-col'>
        <h2 className='p-4 font-bold text-xl'>Create User Here</h2>
        <div className='flex space-x-10 justify-center'>
        <input type="text" onChange={handleChange} name="name" value={form.name} placeholder='Name' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <input type="text" onChange={handleChange} name="lastname" value={form.lastname} placeholder='Last Name' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <input type="text" onChange={handleChange} name="position" value={form.position} placeholder='Position' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <button type="submit" onClick={handleSubmit} className='bg-blue-500 border text-white py-2 px-4 rounded-sm cursor-pointer hover:opacity-80 active:border-black focus:border-black '>Save</button>
        </div>
        </div>
            <div className='mx-4 my-16'>
                <table className='w-[60%] mx-auto text-center table-fixed'>
            <thead>
                <tr>
                <th className="p-2 border border-gray-400 bg-gray-100">Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Last Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Position</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Action</th>
                </tr>
            </thead>
                        <tbody>
             {employees.map(employee => (
                <tr key={employee.id}>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.name}</td>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.lastname}</td>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.position}</td>
                    <td className="p-2 border border-gray-400 bg-white text-red-500 font-bold" ><button className='cursor-pointer hover:opacity-70' onClick={() => handleDelete(employee.id)}>Delete</button></td>
 
                </tr>))} 

            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Admin