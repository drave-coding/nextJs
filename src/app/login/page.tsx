"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation";
import axios  from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false);


    const onLogin = async() =>{
        try {
            setLoading(true);
            const response = await axios.post("./api/users/login" , user);
            console.log("Login successful" , response.data);
            toast.success("Logged in")
            router.push('/profile')

        } catch (error : any) {
            console.log("Login Error", error.message);
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    },[user]);


    return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="p-4">{loading ? "Logging You In" : "Login"}</h1>
                <hr />
                
                <label className="p-2" htmlFor="email">Email</label>
                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})} 
                    placeholder="Email"
                />
                <label 
                className="p-2" htmlFor="password">Password</label>
                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})} 
                    placeholder="Password"
                />
                <button 
                    onClick={onLogin}
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                >
                    Login Here
                </button>
                <Link className=" hover:uppercase" href='/signup'>New Account, Sign Up First</Link>
            </div>
        )
}