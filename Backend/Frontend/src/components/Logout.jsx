import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [Authuser, setAuthuser] = useAuth()
    const handlelogout = () => {
        try {
            setAuthuser({
                ...Authuser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successful")
            
            setTimeout(() => { window.location.reload() },2000)

        } catch (error) {
            console.log(error)
            toast.error("Error :" + error.message)
            setTimeout(() => { },2000)
        }
    }
    return (
        <div>
            <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer' onClick={handlelogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout
