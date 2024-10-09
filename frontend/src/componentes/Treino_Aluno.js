import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import '../App.css';
import { Nav } from "./Nav";

export const TreinoAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [treinos, setTreinos] = useState([]);
    const [selectedAluno, setSelectedAluno] = useState(null);
    const [selectedTreinos, setSelectedTreinos] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [seriesEdit, setSeriesEdit] = useState('');
    const[mensagem,setMensagem] = useState("");
    const[erro,setErro] = useState("");

   

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/alunos");
                const data = await response.json();
                setAlunos(data);
            } catch (error) {
                console.error("Error fetching alunos:", error);
            }
        };

        fetchAlunos();
    }, []);

    useEffect(() => {
        const fetchTreinos = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/treinos");
                const data = await response.json();
                setTreinos(data);
            } catch (error) {
                console.error("Error fetching treinos:", error);
            }
        };

        fetchTreinos();
    }, []);

    const handleAlunoChange = (e) => {
        setSelectedAluno(e.target.value);
    };

   
    const handleTreinoChange = (treino) => {
        if (selectedTreinos.includes(treino)) {
            setSelectedTreinos(selectedTreinos.filter((t) => t.id !== treino.id));
        } else {
            setSelectedTreinos([...selectedTreinos, treino]);
        }
    };

    const handleEditClick = (treinoId, currentSeries) => {
        setEditMode(treinoId);
        setSeriesEdit(currentSeries);
    };

    const handleSeriesChange = (e) => {
        setSeriesEdit(e.target.value);
    };

    const handleSeriesSave = (treinoId) => {

        setTreinos(
            treinos.map(treino =>
                treino.id === treinoId ? { ...treino, series: seriesEdit } : treino
            )
        );

        setSelectedTreinos(
            selectedTreinos.map(treino =>
                treino.id === treinoId ? { ...treino, series: seriesEdit } : treino
            )
        );
        setEditMode(null);
    };

        const handleSubmit = async (e) => {
        e.preventDefault();

      console.log(selectedTreinos)
        const treinosParaSalvar = selectedTreinos.map(treino => ({
            treino_id: treino.id,
            series: treino.series,
            inicio: treino.inicio || '',
            fim: treino.fim || '' 
        }));

        if (!selectedAluno || treinosParaSalvar.length === 0) {
            setErro("Por favor, selecione um aluno e pelo menos um treino.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/treino/aluno", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    aluno: selectedAluno,
                    treinos: treinosParaSalvar
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setErro("");
                setMensagem(data.mensagem);

                setSelectedTreinos([]);
            } else {
                setMensagem("");
                setErro(data.mensagem || "Erro ao cadastrar os treinos");
            }
        } catch (error) {
            setMensagem("");
            setErro("Ocorreu um erro ao cadastrar os treinos.");
        }
    };

    return (
        <>
            <div className="d-flex">
                <Nav />
                <div className="flex-grow-1 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-control">
                                <span>{erro}</span>
                                <span>{mensagem}</span>
                            </div>
                            
                            <label>Selecione um aluno:</label>
                            <select className="form-control" onChange={handleAlunoChange}>
                                <option value="">Selecione um aluno</option>
                                {alunos.map((aluno) => (
                                    <option key={aluno.id} value={aluno.id}>
                                        {aluno.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Selecione os treinos para esse aluno:</label>
                            <div className="flex-grow-1 p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Séries</th>
                                            <th>Data de início</th>
                                            <th>Data fim</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {treinos.map((treino) => (
                                            <tr
                                                key={treino.id}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleTreinoChange(treino)}
                                            >
                                                <td className={selectedTreinos.some(t => t.id === treino.id) ? "selected" : ""}>
                                                    {treino.nome}
                                                </td>
                                                <td className={selectedTreinos.some(t => t.id === treino.id) ? "selected" : ""}>
                                                    {treino.descricao}
                                                </td>
                                                <td className={selectedTreinos.some(t => t.id === treino.id) ? "selected" : ""}>
                                                    {editMode === treino.id ? (
                                                        <>
                                                            <input
                                                                type="text"
                                                                value={seriesEdit}
                                                                onChange={handleSeriesChange}
                                                                onClick={(e)=>{e.stopPropagation();}}
                                                            />
                                                            <button
                                                                className="btn btn-sm btn-success"
                                                                onClick={(e) => { e.stopPropagation(); handleSeriesSave(treino.id) }}
                                                            >
                                                                Salvar
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {treino.series}
                                                            <CiEdit onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleEditClick(treino.id, treino.series);
                                                            }} style={{ cursor: 'pointer' }} />
                                                        </>
                                                    )}
                                                </td>
                                                <td className={selectedTreinos.some(t => t.id === treino.id) ? "selected" : ""} required><input type="date"></input></td>
                                                <td className={selectedTreinos.some(t => t.id === treino.id) ? "selected" : ""} required><input type="date"></input></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Cadastrar Treino para o aluno</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
