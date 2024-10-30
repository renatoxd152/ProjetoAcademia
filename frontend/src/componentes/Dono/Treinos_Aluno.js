import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { Nav } from './Nav';
export const TreinosAlunos = () =>
{
    const[treinos,setTreinos] = useState([]);
    const{id} = useParams();
    const[edit,setEdit] = useState(null);
    const [editData, setEditData] = useState({
        series: '',
        duracao_treino_inicio: '',
        duracao_treino_fim: ''
      });

      
    const formatarData = (data) => {
        return format(data, 'dd/MM/yyyy');
      };

      const deletarTreino = async (treinoID) => {
        try {
          await fetch(`http://localhost:8000/api/deletar/${treinoID}/treino/aluno`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          setTreinos(treinos.filter(treino => treino.id !== treinoID));
        } catch (error) {
          console.error("Erro ao deletar treino:", error);
        }
      };

      
      const editarTreino = (treino) => {
        setEdit(treino.id);
        setEditData({
          series: treino.series,
          duracao_treino_inicio: treino.duracao_treino_inicio,
          duracao_treino_fim: treino.duracao_treino_fim
        });
      };
    

      const salvarEdicao = async (treinoId) => {
        try {
          await fetch(`http://localhost:8000/api/editar/${treinoId}/treino/aluno`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData)
          });
    
          setTreinos(treinos.map(treino =>
            treino.id === treinoId ? { ...treino, ...editData } : treino
          ));
          setEdit(null);
        } catch (error) {
          console.error('Erro ao salvar a edição:', error);
        }
      };

      const cancelarEdicao = () => {
        setEdit(null);
        setEditData({
          series: '',
          duracao_treino_inicio: '',
          duracao_treino_fim: ''
        }); 
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
    return (
        <>
          <div className="d-flex">
            <Nav tipoUsuario="dono"/>
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
                    treinos.map((treino) => (
                      <tr key={treino.id}>
                        <td>{treino.treino.nome}</td>
                        <td>
                          {edit === treino.id ?
                            <input
                              type='text'
                              value={editData.series}
                              onChange={(e) => setEditData({ ...editData, series: e.target.value })}
                            /> : treino.series}
                        </td>
                        <td>
                          {edit === treino.id ?
                            <input
                              type='date'
                              value={editData.duracao_treino_inicio}
                              onChange={(e) => setEditData({ ...editData, duracao_treino_inicio: e.target.value })}
                            /> : formatarData(treino.duracao_treino_inicio)}
                        </td>
                        <td>
                          {edit === treino.id ?
                            <input
                              type='date'
                              value={editData.duracao_treino_fim}
                              onChange={(e) => setEditData({ ...editData, duracao_treino_fim: e.target.value })}
                            /> : formatarData(treino.duracao_treino_fim)}
                        </td>
                        <td>
                            {edit === treino.id ?
                                <>
                                <button className='btn btn-success btn-sm' onClick={() => salvarEdicao(treino.id)}>
                                    Salvar
                                </button>
                                <button className='btn btn-secondary btn-sm ms-2' onClick={cancelarEdicao}>
                                    Cancelar
                                </button>
                                </> :
                                <button className='btn btn-primary btn-sm' onClick={() => editarTreino(treino)}>
                                <CiEdit style={{ fontSize: '1.5rem', color: 'white' }} />
                                </button>
                            }
                        </td>
                        <td>
                          <button className='btn btn-danger btn-sm' onClick={()=>deletarTreino(treino.id)}>
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
      );
}