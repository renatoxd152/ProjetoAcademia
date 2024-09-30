import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
    }
    const handleHome = () =>
    {
        navigate('/home');
    }
    return (
        <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
            <div className="w-50 p-4 bg-light shadow">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                    <a href='/cadastrar' className="d-block mb-2">Não é cadastrado? Cadastra-se</a>
                    <button type="submit" onClick={handleHome} className="btn btn-primary mt-3">Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};
