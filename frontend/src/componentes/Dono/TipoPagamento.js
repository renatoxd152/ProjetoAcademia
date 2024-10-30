import { useState } from "react";
import { Nav } from "./Nav";

export const TipoPagamento = ()=>
{
    const[pagamento,setPagamento] = useState("");
    const[erro,setErro] = useState("");
    const[mensagem,setMensagem] = useState("");

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if (pagamento.trim() === "") {
            setErro("Por favor, insira um nome válido.");
            return;
        }

        const pagamentoData = {tipo_pagamento:pagamento};
        try {
            const response = await fetch("http://localhost:8000/api/criar/pagamento",
                {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(pagamentoData)
                }
            );

            const data = await response.json();

            if(response.ok)
            {
                setErro("");
                setMensagem(data.mensagem);
            }
            else
            {
                setMensagem("");
                setErro("Erro ao criar contrato");
            }
        } catch (error) {
            setErro(error);
        }
    }
    return(
        <>
             <div className="d-flex">
                <Nav tipoUsuario="dono"/>
                <div className="flex-grow-1 p-4">
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        {erro && <span className="alert alert-danger d-block">{erro}</span>}
                        {mensagem && <span className="alert alert-success d-block">{mensagem}</span>}
                    </div>
                        <div className="form-group">
                            <label>Nome do tipo de pagamento</label>
                            <input type="text" className="form-control mb-3" value={pagamento} onChange={(e)=>setPagamento(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Criar nova forma de pagamento</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}