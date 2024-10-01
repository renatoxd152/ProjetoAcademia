import { Nav } from "./Nav"

export const TreinoAluno = () =>
{
    return(
        <>
         <div className="d-flex">
            <Nav/>
                <div className="flex-grow-1 p-4">
                    <form> 
                        <div className="form-group">
                            <label>Selecione um aluno:</label>
                            <select className="form-control">
                                <option>oi</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Selecione um treino:</label>
                            <select className="form-control">
                                <option>oi</option>
                            </select>
                        </div>

                    
                        <div className="form-group">
                            <button>Cadastrar Treino para o aluno</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}