import { Nav } from "./Nav"

export const Treino = () =>
{
    return(
        <>
            <div className="d-flex">
                <Nav/>

                <div className="flex-grow-1 p-4">
                        <form> 
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Descrição</label>
                                <input type="text" className="form-control" />
                                
                            </div>

                            <div className="form-group">
                                <label>Séries</label>
                                <input type="text" className="form-control" />
                                
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