import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://arcane-waters-84543.herokuapp.com/admin/${email}`)
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
        }
    }, [user])

    return [admin]
}

export default useAdmin;