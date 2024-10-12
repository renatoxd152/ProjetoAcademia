import { useEffect, useState } from "react";
import { Nav } from "./Nav";
export const ListarAlunos = () =>
{
    const[alunos,setAlunos] = useState([]);
    useEffect(()=>
    {
        const fetchAlunos = async ()=>
            {
                try {
                    const response = await fetch("http://localhost:8000/api/users/students");
                    const data = await response.json();
                    setAlunos(data);
                } catch (error) {
                    console.error("Error fetching students:", error);
                }
            };
        fetchAlunos();
    })
    return(
        <>
            <div className="d-flex">
                <Nav/>

                <div className="flex-grow-1 p-4">
                    <table>
                        <thead>
                            <tr>
                                <th>Aluno</th>
                                <th>CPF</th>
                                <th>Email</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alunos.map((aluno)=>
                                (
                                    <tr key={aluno.id} style={{cursor:'pointer'}}>
                                        <td>{aluno.usuario.nome}</td>
                                        <td>{aluno.usuario.cpf}</td>
                                        <td>{aluno.usuario.email}</td>
                                        <td>{aluno.telefone}</td>
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