import { Tune } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const DataManage = createContext()
const ManageUsers = ({ children }) => {
    const [userLoading , setUserLoading] = useState(Tune)
   

    const verifyUser = (email)=>{
        console.log(email)
        fetch(`http://localhost:5000/verify/${email}`, {
            method: "PUT",
          })
          return
       
    } 
    const dataInfo = {verifyUser}
    return (
        <DataManage.Provider value={dataInfo}>
            { children }
        </DataManage.Provider>
    );
};

export default ManageUsers;