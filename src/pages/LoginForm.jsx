import { useState } from "react";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../assets/images";
// import Swal from "sweetalert2";


function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const requestBody = { email, password };
            const response = await axios.post('https://api.p2.lc2s5.foxhub.space/login', requestBody);
            localStorage.setItem('access_token', response.data.access_token);
            navigate('/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message
            });
        }
    }

    return (
        <div 
            className="backgroundImg opacity- flex items-center justify-center min-h-screen bg-cover bg-center"        >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better contrast */}
            <div className="relative w-full max-w-md p-6 sm:p-8 space-y-6 bg-white bg-opacity-90 rounded-xl shadow-lg opacity-40">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="" className="w-10"/>
                <h1 className="text-4xl font-bold text-center text-gray-500">Prophawk</h1>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">Login to your account</h2>
                    <p className="text-center text-gray-600">Welcome back!</p>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address :</label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                placeholder="Email: user@example.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password :</label>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                placeholder="Password: password12345"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-teal-500 hover:to-blue-500 transform transition duration-300 ease-in-out"
                    >
                        LOG IN
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
