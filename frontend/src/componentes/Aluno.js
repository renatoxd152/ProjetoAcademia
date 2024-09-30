import { Nav } from "./Nav"

export const Aluno = () => {
    return(
        <div className="d-flex">
            <Nav/> 
            <div className="flex-grow-1 p-4">
                <form> 
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Data de nascimento</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button>Cadastrar Aluno</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
