import React from 'react'

const User = ({employees}) => {


  return (
    <div>

            <div className='mx-4 my-16'>
                <table className='w-[80%] mx-auto text-center table-fixed'>
            <thead>
                <tr>
                <th className="p-2 border border-gray-400 bg-gray-100">Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Last Name</th>
                <th className="p-2 border border-gray-400 bg-gray-100">Position</th>
                </tr>
            </thead>
                        <tbody>
             {employees.map(employee => (
                <tr key={employee.id}>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.name}</td>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.lastname}</td>
                    <td className="p-2 border border-gray-400 bg-white" >{employee.position}</td>
                
 
                </tr>))} 

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default User