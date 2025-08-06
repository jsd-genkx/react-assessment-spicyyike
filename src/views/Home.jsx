import React, { useState, useEffect } from 'react'
import User from '../components/User'
import Admin from '../components/Admin';
import axios from 'axios';

export const API_URL = "https://jsd5-mock-backend.onrender.com"


export const Home = () => {

const [userVisible, setUserVisible] = useState(false)
const [adminVisible, setAdminVisible] = useState(false)
const [header, setHeader] = useState("React - Assessment")

const [employees, setEmployees] = useState([])

const fetchUsers = async () => {
        //setLoading(true)
        try {
            const res = await axios.get(`${API_URL}/members`);
            //alert("Successfully fetched data")
            setEmployees(res.data)
            //console.log(res.data)
            //console.log(typeof res.data)
        } catch (error) {
            alert("Fail to fetch users")
            console.error(error)
        }
        //setLoading(false)
    };

    

const userVisibility = () => {
    setUserVisible(true)
    setAdminVisible(false)
    setHeader("Home - User Section")
}

const adminVisibility = () => {
        setUserVisible(false)
    setAdminVisible(true)
    setHeader("Home - Admin Section")
}






    useEffect(() => {
      fetchUsers();
      // return () => {
      //   second
      // } clean up function
    }, [])

  return (
    <div className='w-full'>
        <h1 className='w-full text-center font-bold text-5xl m-6'>
            Generation Thailand <br /> {header}
        </h1>
        <div className='p-6 flex justify-evenly'>
    <button onClick={userVisibility} id="user" className='bg-white cursor-pointer font-bold p-4 rounded-lg shadow-lg'>User Home Section</button>
    <button onClick={adminVisibility} id="admin" className='bg-white cursor-pointer font-bold p-4 rounded-lg shadow-lg'>Admin Home Section</button>
    </div>

    {userVisible && <User employees={employees}/>}
    {adminVisible && <Admin employees={employees} api={API_URL} setEmployees={setEmployees}/>}


    </div>
  )
}
