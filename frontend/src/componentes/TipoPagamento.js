import { Nav } from "./Nav"

export const TipoPagamento = ()=>
{
    return(
        <>
             <div className="d-flex">
                <Nav/>
                <div className="flex-grow-1 p-4">
                <form> 
                        <div className="form-group">
                            <label>Nome do tipo de pagamento</label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <button>Criar nova forma de pagamento</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}