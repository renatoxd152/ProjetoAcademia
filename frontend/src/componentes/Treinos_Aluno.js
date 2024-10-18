import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
export const TreinosAlunos = () =>
{
    const[treinos,setTreinos] = useState([]);
    const{id} = useParams();

    const formatarData = (data) => {
        return format(data, 'dd/MM/yyyy');
      };
    

    useEffect(()=>
    {
        const fetchTreinos = async ()=>
            {
                try {
                    const response = await fetch(`http://localhost:8000/api/students/${id}/trainings`);
                    const data = await response.json();
                    setTreinos(data);
                } catch (error) {
                    console.error("Error fetching trainings:", error);
                }
            };
        fetchTreinos()
    },[id])
    return(
        <>
             <div className="d-flex">
                <Nav />
                
                <div className="flex-grow-1 p-4">
                    <table className="table">
                    <caption className="table-caption">Treinos cadastrados para o aluno</caption>
                        <thead>
                            <tr>
                                <th>Treino</th>
                                <th>Séries</th>
                                <th>Início do treino</th>
                                <th>Fim do treino</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                treinos.map((treino)=>
                                (
                                    <tr key={treino.id}>
                                        <td>{treino.treino.nome}</td>
                                        <td>{treino.series}</td>
                                        <td>{formatarData(treino.duracao_treino_inicio)}</td>
                                        <td>{formatarData(treino.duracao_treino_fim)}</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm' style={{ width: '100%' }}>
                                                <CiEdit style={{ fontSize: '1.5rem', color: 'white' }} />
                                            </button>
                                            </td>
                                            <td>
                                            <button className='btn btn-danger btn-sm' style={{ width: '100%' }}>
                                                <CiTrash style={{ fontSize: '1.5rem', color: 'white' }} />
                                            </button>
                                        </td>
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