import { useState } from "react";
import img from '../Components/Asset/SHARDA TRADE.jpg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
            <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white shadow-2xl border border-gray-200">
                <div className="flex justify-center mb-4">
                    <img src={img} alt="Company logo placeholder" className="w-24 h-24"/>
                </div>
                <h1 className="text-3xl font-extrabold text-center text-gray-800">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2 cursor-pointer"/>
                        <label htmlFor="terms" className="text-sm text-gray-600">I agree to the <a href="#" className="text-indigo-500 hover:underline">Terms and Conditions</a></label>
                    </div>
                    <button type="submit" className="w-full py-3 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg">Register</button>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <span className="text-xs text-center text-gray-500 uppercase">or register with</span>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="p-3 bg-red-600 rounded-full text-white hover:bg-red-700 shadow-md hover:shadow-lg transition-all">
                        <i className="fab fa-google"></i>
                    </button>
                    <button className="p-3 bg-blue-400 rounded-full text-white hover:bg-blue-500 shadow-md hover:shadow-lg transition-all">
                        <i className="fab fa-twitter"></i>
                    </button>
                </div>
                <p className="text-sm text-center text-gray-600 mt-4">Already have an account? <a href="#" className="text-indigo-500 hover:underline">Login</a></p>
            </div>
        </div>
    );
}
