import { useState } from "react";
import { Nav } from "./Nav";

export const Treino = () =>
{
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        series: '',
    });
    const[mensagem,setMensagem] = useState("");
    const[erro,setErro] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/treino", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setErro("");
                setMensagem(data.mensagem)
                setFormData({
                    nome: '',
                    descricao: '',
                    series: '',
                });
            } else {
                setMensagem("");
                setErro(data.mensagem || "Erro ao cadastrar o treino" )
            }
        } catch (error) {
            setMensagem("");
            setErro("Ocorreu um erro ao cadastrar o treino.");
        }
    };



    return(
        <>
            <div className="d-flex">
                <Nav/>

                <div className="flex-grow-1 p-4">
                        <form onSubmit={handleSubmit}> 

                            <div className="form-group">
                                <span>{mensagem}</span>
                                <span>{erro}</span>
                            </div>
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" name="nome" value={formData.nome} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Descrição</label>
                                <input type="text" className="form-control" name="descricao" value={formData.descricao} onChange={handleChange}/>
                                
                            </div>

                            <div className="form-group">
                                <label>Séries</label>
                                <input type="text" className="form-control" name="series" value={formData.series} onChange={handleChange} />
                                
                            </div>
                        
                            <div className="form-group">
                                <button>Cadastrar Treino</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}