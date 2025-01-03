import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { Nav } from "./Nav";
export const ListarContratos = () =>
{
    const[contratos,setContratos] = useState([]);
    
    const formatarData = (data) => {
      return format(data, 'dd/MM/yyyy');
    }
    useEffect(()=>
    {
        const fetchContratos = async ()=>
        {
            try {
                const response = await fetch("http://localhost:8000/api/contratos");
                const data = await response.json();
                setContratos(data);
            } catch (error) {
                console.error("Error fetching contratos:", error);
            }
        };
        fetchContratos();
    },[])
    return(
        <>
            <div className="d-flex">
                <Nav tipoUsuario="dono"/>
                <div className="flex-grow-1 p-4">
                    <table>
                        <thead>
                            <tr>
                                <th>Aluno</th>
                                <th>Data Início</th>
                                <th>Data Fim</th>
                                <th>Duração(Anos)</th>
                                <th>Tipo de pagamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contratos.map((contrato)=>
                                (
                                    <tr key={contrato.id}>
                                        <td>{contrato.aluno.usuario.nome}</td>
                                        <td>{formatarData(contrato.data_inicio)}</td>
                                        <td>{formatarData(contrato.date_fim)}</td>
                                        <td>{contrato.duracao}</td>
                                        <td>{contrato.tipo_pagamento.nome}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}