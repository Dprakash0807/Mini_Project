import { useState } from "react";
import image from '../Components/Asset/SHARDA TRADE.jpg';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <div className="flex justify-center mb-4">
                    <img src={image} alt="Company logo placeholder" className="w-24 h-24"/>
                </div>
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2"/>
                        <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-indigo-500">Terms and Conditions</a></label>
                    </div>
                    <button type="submit" className="w-full py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Login</button>
                </form>
                <div className="flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <span className="text-xs text-center text-gray-500 uppercase">or login with</span>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="p-3 bg-red-600 rounded-full text-white hover:bg-red-700">
                        <i className="fab fa-google"></i>
                    </button>
                    <button className="p-3 bg-blue-400 rounded-full text-white hover:bg-blue-500">
                        <i className="fab fa-twitter"></i>
                    </button>
                </div>
                <p className="text-sm text-center text-gray-500">Don't have an account? <a href="#" className="text-indigo-500">Sign up</a></p>
            </div>
        </div>
    );
}
