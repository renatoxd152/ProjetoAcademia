import { Nav } from "./Nav"

export const Contrato = () =>
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
                                <option>aluno</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Data de Ínicio:</label>
                            <input type="date" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Data Fim:</label>
                            <input type="date" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Selecione o tipo de pagamento:</label>
                            <select className="form-control">
                                <option>pagamento</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Valor total do contrato:</label>
                            <input type="text" className="form-control"/>
                        </div>
                    
                        <div className="form-group">
                            <button>Criar contrato</button>
                        </div>
                    </form>
                </div>
             </div>
        </>
    )
}