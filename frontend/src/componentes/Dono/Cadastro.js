import React, { useState } from "react";
export const Cadastro = () =>
{
    const[erro,setErro] = useState("");
    const[mensagem,setMensagem] = useState("");
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        tipo:'',
        senha:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/save/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    cpf: formData.cpf,
                    email: formData.email,
                    senha:formData.senha,
                    tipo:'dono'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setErro("");
                setMensagem(data.mensagem)
            } else {
                setMensagem("");
                setErro(data.mensagem || "Erro ao cadastrar o usuário" )
            }
        } catch (error) {
            setMensagem("");
            setErro("Ocorreu um erro ao cadastrar o usuário.");
        }
        
    }
    return (
        <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
            <div className="w-50 p-4 bg-light shadow">
                <h2>Cadastro</h2>
                {erro &&  <span className="alert alert-danger d-block">{erro}</span>}
                {mensagem && <span className="alert alert-success d-block">{mensagem}</span>}
               
                <form onSubmit={handleCadastro}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="senha"
                            value={formData.senha} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nome"
                            value={formData.nome} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>CPF:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="cpf"
                            value={formData.cpf} 
                            onChange={handleChange}
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