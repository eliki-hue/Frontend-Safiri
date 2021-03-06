import * as api from '../api/index'
import {useNavigate } from "react-router-dom"
import { Route, Navigate} from 'react-router-dom';



export const registerDriver = (driver)=>async(dispatch)=>{
    try {
        const data = await api.registerDriver(driver)
        console.log(data)
        // {data.status ==201 
        //     console.log('yes')
        //     navigate('/login')
        // }
        console.log(data.status)
    } catch (error) {
        console.log(error)
        
    }

}
export const registerCustomer = (customer)=>async(dispatch)=>{
    try {
        const data = await api.registerCustomer(customer)
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }

}
export const login = (info)=>async(dispatch)=>{
    // let navigate =useNavigate();
    try {
        const data = await api.login(info)
        localStorage.setItem('userId', data.data.id);
        localStorage.setItem('userRole', data.data.User_role);
        console.log(data.data.User_role)
        
    } catch (error) {
        console.log(error)
        
    }

}
export const busbooking = (details)=>async(dispatch)=>{
    try {
        const data = await api.busbooking(details)
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }

}

