export const Nav = () => {
    return (
        <div className="bg-primary d-flex flex-column justify-content-between" style={{ width: "12%", height: "100vh" }}>
            <ul className="list-unstyled p-3">
                <li><h2 className="text-white mb-4">Menu</h2></li>
                <li className="mb-3">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                    </form>
                </li>
                <li className="fs-5 mb-3"><a href="/aluno" className="text-white text-decoration-none d-block py-2 px-3 rounded">Cadastrar Aluno</a></li>
                <li className="fs-5 mb-3"><a href="/treino" className="text-white text-decoration-none d-block py-2 px-3 rounded">Cadastrar Treino</a></li>
                <li className="fs-5 mb-3"><a href="/treino/aluno" className="text-white text-decoration-none d-block py-2 px-3 rounded">Cadastrar treino para o aluno</a></li>
                <li className="fs-5 mb-3"><a href="/contrato" className="text-white text-decoration-none d-block py-2 px-3 rounded">Criar contrato</a></li>
                <li className="fs-5 mb-3"><a href="/visualizar/contratos" className="text-white text-decoration-none d-block py-2 px-3 rounded">Visualizar contratos</a></li>
                <li className="fs-5 mb-3"><a href="/criar/pagamento" className="text-white text-decoration-none d-block py-2 px-3 rounded">Criar nova forma de pagamento</a></li>
            </ul>
            <div className="p-3 text-center">
                <span className="text-white-50">© 2024 GymApp</span>
            </div>
        </div>
    );
}
