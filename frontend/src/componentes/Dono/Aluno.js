import React, { useState } from "react";
import { Nav } from "./Nav";

export const Aluno = () => {
    const[mensagem,setMensagem] = useState("");
    const[erro,setErro] = useState("");

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        cep: '',
        telefone: '',
        dataNascimento: '',
        tipo: 'aluno'
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const resetarFormulario = () =>
    {
        setFormData(
            {
                nome: '',
                cpf: '',
                email: '',
                senha: '',
                cep: '',
                telefone: '',
                dataNascimento: '',
                tipo: 'aluno'
            }
        );
      
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        console.log(token)
        try {
            const response = await fetch("http://127.0.0.1:8000/api/save/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    cpf: formData.cpf,
                    email: formData.email,
                    senha: formData.senha,
                    cep: formData.cep,
                    telefone: formData.telefone,
                    data_nasc: formData.dataNascimento,
                    tipo: formData.tipo
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setErro("");
                setMensagem(data.mensagem)
                resetarFormulario();
            } else {
                setMensagem("");
                setErro(data.mensagem || "Erro ao cadastrar o usuário" )
            }
        } catch (error) {
            setMensagem("");
            setErro("Ocorreu um erro ao cadastrar o usuário.");
        }
    };

    return (
        <div className="d-flex">
            <Nav tipoUsuario="dono"/>
            <div className="flex-grow-1 p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-group">
                            {
                                mensagem &&<span className="alert alert-success d-block">{mensagem}</span>
                            }
                            {
                                erro &&  <span className="alert alert-danger d-block">{erro}</span>
                            }
                        </div>
                        
                        <label>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            className="form-control"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input
                            type="text"
                            name="cpf"
                            className="form-control"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            name="senha"
                            className="form-control"
                            value={formData.senha}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <input
                            type="text"
                            name="cep"
                            className="form-control"
                            value={formData.cep}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input
                            type="text"
                            name="telefone"
                            className="form-control"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Data de nascimento</label>
                        <input
                            type="date"
                            name="dataNascimento"
                            className="form-control"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Cadastrar Aluno</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
