import { useEffect, useState } from "react";

const useAdmin = email => {
    console.log(email)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            const url = `http://localhost:5000/users/admin/${email}`;
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isAdmin)
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;