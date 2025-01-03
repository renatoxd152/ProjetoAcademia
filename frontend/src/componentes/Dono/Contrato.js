import { useEffect, useState } from "react";
import { Nav } from "./Nav";

export const Contrato = () => {
    const [alunos, setAlunos] = useState([]);
    const[pagamentos,setPagamentos] = useState([]);
    const[mensagem,setMensagem] = useState("");
    const[erro,setErro] = useState("");

    const[formData,setFormData] = useState({
        aluno:'',
        data_inicio:'',
        data_fim:'',
        pagamento:'',
        valor_contrato:'',
        parcelas:''
    })
    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/users/students");
                const data = await response.json();
                setAlunos(data);
            } catch (error) {
                console.error("Error fetching alunos:", error);
            }
        };

        fetchAlunos();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const limparFormulario = () => {
        setFormData({
            aluno: '',
            data_inicio: '',
            data_fim: '',
            pagamento: '',
            valor_contrato: ''
        });
    }    
    
    const gerarParcelas = (valor) =>
    {
        let parcela;
        let parcelas = [];
        for(let i = 1; i<=12;i++)
        {
            parcela = (valor/i).toFixed(2);
            parcelas.push(<option key={i} value={i}>{`${i}x de R$ ${parcela}`}</option>);
        }
        return parcelas;
    } 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const dataInicio = new Date(formData.data_inicio);
        const dataFim = new Date(formData.data_fim);
    
        const duracao = dataFim.getFullYear() - dataInicio.getFullYear();
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('id');
        const contratoData = {
            aluno: formData.aluno,
            dono:userId,
            inicio: formData.data_inicio,
            fim: formData.data_fim,
            tipo_pagamento: formData.pagamento,
            duracao:duracao,
            valor_contrato:formData.valor_contrato,
            parcelas:formData.parcelas
        };

        try {
            const response = await fetch("http://localhost:8000/api/contratos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(contratoData),
            });
            const data = await response.json();
            if (response.ok) {
                limparFormulario();
                setMensagem(data.mensagem);
                setErro("");
            } else {
                setErro(data.erro);
                setMensagem("");
                console.error("Erro ao criar contrato:", response.statusText);
            }
        } catch (error) {
            setErro("Erro ao enviar contrato:", error);
        }
    };



    useEffect(() => {
        const fetchPagamentos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/pagamentos");
                const data = await response.json();
                setPagamentos(data);
            } catch (error) {
                console.error("Error fetching pagamentos:", error);
            }
        };

        fetchPagamentos();
    }, []);

    return (
        <>
            <div className="d-flex">
                <Nav tipoUsuario="dono"/>
                <div className="flex-grow-1 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            
                                {erro && <span className="alert alert-danger d-block">{erro}</span>}
                                {mensagem && <span className="alert alert-success d-block">{mensagem}</span>}
                            
                            <label>Selecione um aluno:</label>
                            <select
                                className="form-control"
                                name="aluno"
                                value={formData.aluno}
                                onChange={handleChange}
                            >
                                <option value="">Selecione um aluno</option>
                                {alunos.map((aluno) => (
                                    <option key={aluno.id} value={aluno.id}>
                                        {aluno.usuario.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Data de Ínicio:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="data_inicio"
                                value={formData.data_inicio}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Data Fim:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="data_fim"
                                value={formData.data_fim}
                                onChange={handleChange}
                            />
                        </div>

                       
                        <div className="form-group">
                            <label>Valor total do contrato:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="valor_contrato"
                                value={formData.valor_contrato}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Selecione o tipo de pagamento:</label>
                            <select
                                className="form-control"
                                name="pagamento"
                                value={formData.pagamento}
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                {pagamentos.map((pagamento) => (
                                    <option key={pagamento.id} value={pagamento.id}>
                                        {pagamento.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {
                            formData.pagamento === '2' &&
                            (
                                <div className="form-group">
                                    <label>Selecione as parcelas:</label>
                                    <select className="form-control" name="parcelas" value={formData.parcelas} onChange={handleChange}>
                                        {formData.valor_contrato && gerarParcelas(formData.valor_contrato)}
                                    </select>
                                </div>
                            )
                        }
                        

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Criar contrato
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
