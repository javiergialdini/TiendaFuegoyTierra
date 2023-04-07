import { createContext, useState } from "react"

export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@fuegoytierra.com',
        password: 'Abril2023',
        adminAcces: true
    },
    {
        id: 2,
        email: 'user@fuegoytierra.com',
        password: 'user123',
        adminAcces: false
    }
]

export const LoginProvider = ({children}) => {
    const[user, setUser] = useState({
        email: null,
        logged: false,
        adminAcces: false
    })

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)

        if(match && match.password === values.password){
            setUser({
                logged:true,
                email:match.email,
                adminAcces:match.adminAcces
            })
        }
    }

    const logOut = () => {
        setUser({
            emial:'',
            logged: false,
            adminAcces:false
        })
    }

    return(
        <LoginContext.Provider value={{
            user, tryLogin, logOut
        }}>
            {children}
        </LoginContext.Provider>
    )
}