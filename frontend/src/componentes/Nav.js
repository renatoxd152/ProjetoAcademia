export const Nav = () => {
    return (
        <div className="bg-primary" style={{width: "10%", height: "100vh"}}>
            <ul className="list-unstyled" style={{cursor:'pointer'}}>
                <li><h2 className="text-white">Menu</h2></li>
                <li>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </li>
                <li className="fs-5"><a href="/aluno" className="text-white text-decoration-none">Cadastrar Aluno</a></li>
                <li className="fs-5"><a href="/treino" className="text-white text-decoration-none">Cadastrar Treino</a></li>
                <li className="fs-5"><a href="/treino/aluno" className="text-white text-decoration-none">Cadastrar treino para o aluno</a></li>
                <li className="fs-5"><a href="/contrato" className="text-white text-decoration-none">Criar contrato</a></li>
                <li className="fs-5"><a href="/visualizar/contratos" className="text-white text-decoration-none">Visualizar contratos</a></li>
                <li className="fs-5"><a href="/criar/pagamento" className="text-white text-decoration-none">Criar nova forma de pagamento</a></li>
            </ul>
        </div>
    );
}
