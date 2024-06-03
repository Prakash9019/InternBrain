import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [credentials, setCredentials] = useState({username:"" ,email: "", password: "",cpassword:""}) 
    let navigate = useNavigate();
     const diffToast = ()=>{
        toast("Registered Successfully");
     }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {username,email,password} = credentials;
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: 'POST',
                headers: {
                  "Access-Control-Allow-Headers" : "Content-Type",
                  "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                 "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
                },
                body: JSON.stringify({username,email,password})
            });
            console.log(response);
            const json = await response.json();
                localStorage.setItem('jwtData', json.jwtData); 
                toast("Registered Successfully");
                navigate("/");
        }
        catch(err){
            console.log(err);
            toast(err);
        }
        
    }
  
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
<div className="bg-gray-200 w-full min-h-min flex items-center justify-center p-6">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                    <input 
                    onChange={onChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 bg- rounded mb-4 bg-white"
                        name="username"
                        placeholder="Full Name" />

                    <input 
                    onChange={onChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 bg-white"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        onChange={onChange}
                        className="block border border-grey-light w-full p-3 rounded mb-4 "
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        onChange={onChange}
                        className="block border border-grey-light w-full p-3 rounded mb-4 bg-white"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark-900 focus:outline-none my-1"
                    >Create Account</button>
                            <input type="checkbox" name="remember_me"  className="mr-2 bg-white focus:ring-0 rounded " />
                            <label for="remember_me" className="text-gray-700">I accept the <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</Link> and <Link to="#" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</Link></label>
                            </form>
                       
                </div>

                <div className="text-grey-dark mt-6 text-slate-700">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue" to="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
  )
}

export default SignUp