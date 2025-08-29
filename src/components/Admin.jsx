import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Admin = ({employees,api, setEmployees,fetchUsers}) => {
    //console.log(api)
    const [form, setForm] = useState({
    name: "",
    lastname: "",
    position: ""
    });
  
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    lastname: "",
    position: ""
    });

    const handleSubmit = async (e) => {
    e.preventDefault() // prevent ไม่ให้ refresh page default
      await axios.post(`${api}/members`, form);
      await fetchUsers();
      //setEmployees([...employees, form]);
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
        //console.log(id)
        await axios.delete(`${api}/members/${id}`)
        await fetchUsers();
      //setEmployees(employees.filter((employee) => employee._id !== id))
      
  }
  
  const handleEdit = (user) => {
    setEditId(user._id)
    setEditForm({
      name: user.name,
      lastname: user.lastname,
      position: user.position
    })
  }

const handleEditChange = (e) => {
    //console.log(form)
    setEditForm({...editForm, [e.target.name]: e.target.value})
  }

  const handleEditSave = async (id) => { 
    try {
      await axios.put(`${api}/members/${id}`, editForm)
      await fetchUsers();
      setEditId(null)
    } catch (error) {
      console.error("Error updating member:", error)
    }
  }
  
  const handleEditCancel = () => {
    setEditId(null)
  }

  return (
    <div className='mx-12 '>
        <div className='flex flex-col mx-auto'>
        <h2 className='py-4 font-bold text-xl'>Create User Here</h2>
        <div className='flex space-x-10 justify-evenly'>
        <input type="text" onChange={handleChange} name="name" value={form.name} placeholder='Name' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <input type="text" onChange={handleChange} name="lastname" value={form.lastname} placeholder='Last Name' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <input type="text" onChange={handleChange} name="position" value={form.position} placeholder='Position' className='bg-white border border-gray-700 p-2 rounded-sm w-[25%]'/>
        <button type="submit" onClick={handleSubmit} className='bg-blue-500 border text-white py-2 px-4 rounded-sm cursor-pointer hover:opacity-80 active:border-black focus:border-black '>Save</button>
        </div>
        </div>
            <div className='mx-4 my-16'>
                <table className='w-[80%] mx-auto text-center table-fixed'>
            <thead>
                <tr>
                <th className="p-2 border border-gray-400 bg-gray-100">Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Last Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Position</th>
              <th className="p-2 border border-gray-400 bg-gray-100">Action</th>
              <th className="p-2 border border-gray-400 bg-gray-100">Action</th>
                </tr>
            </thead>
                        <tbody>
             {employees.map(employee => (
               <tr key={employee._id}>
                 
                 {editId === employee._id ? <>
                   <td className="p-2 border border-gray-400 bg-white" >
                     <input
                       value={editForm.name}
                       onChange={handleEditChange}
                       name="name"
                       className = "bg-white mx-1 w-20 px-2 rounded border"
                     />
                   </td>
                   <td className="p-2 border border-gray-400 bg-white" >
                                          <input
                       value={editForm.lastname}
                       onChange={handleEditChange}
                       name="lastname"
                       className = "bg-white mx-1 w-20 px-2 rounded border"
                     />
                    </td>
                   <td className="p-2 border border-gray-400 bg-white" >
                                          <input
                       value={editForm.position}
                       onChange={handleEditChange}
                       name="position"
                       className = "bg-white mx-1 w-20 px-2 rounded border"
                     />
                 </td>
                 <td className="p-2 border border-gray-400 bg-white text-white font-bold" ><button className='cursor-pointer hover:opacity-70 bg-green-400 p-2 rounded-lg' onClick={() => handleEditSave(employee._id)}>Save</button></td>
                    <td className="p-2 border border-gray-400 bg-white text-white font-bold" ><button className='cursor-pointer hover:opacity-70 bg-red-500 p-2 rounded-lg' onClick={() => handleEditCancel()}>Cancel</button></td></> : <><td className="p-2 border border-gray-400 bg-white" >{employee.name}</td>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.lastname}</td>
                 <td className="p-2 border border-gray-400 bg-white" >{employee.position}</td>
                 <td className="p-2 border border-gray-400 bg-white text-white font-bold" ><button className='cursor-pointer hover:opacity-70 bg-orange-300 p-2 rounded-lg' onClick={() => handleEdit(employee)}>Edit</button></td>
                    <td className="p-2 border border-gray-400 bg-white text-white font-bold" ><button className='cursor-pointer hover:opacity-70 bg-red-500 p-2 rounded-lg' onClick={() => handleDelete(employee._id)}>Delete</button></td></>}

 
                </tr>))} 

            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Admin