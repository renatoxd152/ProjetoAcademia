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
                <li className="fs-5"><a href="/aluno" className="text-white">Cadastrar Aluno</a></li>
                <li className="fs-5"><a href="/" className="text-white">Cadastrar Treino</a></li>
                <li className="fs-5"><a href="/" className="text-white">Cadastrar treino para o aluno</a></li>
            </ul>
        </div>
    );
}
