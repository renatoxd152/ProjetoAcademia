import React, { useState } from "react";
export const Cadastro = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    const handleCadastro = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
            <div className="w-50 p-4 bg-light shadow">
                <h2>Cadastro</h2>
                <form onSubmit={handleCadastro}>
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
                    <div className="form-group">
                        <label>Nome:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>CPF:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={cpf} 
                            onChange={(e) => setCPF(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
    
                    <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}