import { jwtDecode } from 'jwt-decode';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const[erro,setErro] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    senha: password,
                }),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                if(data.token)
                {
                    localStorage.setItem('token', data.token);
                    let decodedToken = jwtDecode(data.token);
                    localStorage.setItem('id',decodedToken.sub);
                    localStorage.setItem('tipo',data.tipo);
                    if(data.tipo === 'dono')
                    {
                        navigate('/home');
                    }
                    if(data.tipo === 'aluno')
                    {
                        navigate("/aluno/home");
                    }
                }
            } else {
                setErro(data.erro);
            }
        } catch (error) {
            setErro("Ocorreu um erro na requisição.");
        }
        
    }
    return (
        <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
            <div className="w-50 p-4 bg-light shadow">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    {erro && <span className='alert alert-danger d-block'>{erro}</span>}
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
                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};
