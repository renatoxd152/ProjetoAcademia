import { useState } from "react";

export const Nav = () => {
    const[pesquisa,setPesquisa] = useState("");
    const [rotas, setRotas] = useState([
        { id: 1, url: "/aluno", nome: "Cadastrar Aluno" },
        { id: 2, url: "/listar/alunos", nome: "Visualizar alunos cadastrados" },
        { id: 3, url: "/treino", nome: "Cadastrar Treino" },
        { id: 4, url: "/treino/aluno", nome: "Cadastrar treino para o aluno" },
        { id: 5, url: "/contrato", nome: "Criar contrato" },
        { id: 6, url: "/visualizar/contratos", nome: "Visualizar contratos" },
        { id: 7, url: "/criar/pagamento", nome: "Criar nova forma de pagamento" }
    ]);
    

    const pesquisar = (e) =>
    {
        setPesquisa(e.target.value);
    }

    const rotasFiltradas = rotas.filter((rota)=>rota.nome.toLowerCase().includes(pesquisa.toLowerCase()));
    return (
        <div className="bg-primary d-flex flex-column justify-content-between" style={{ width: "12%", height: "100vh" }}>
            <ul className="list-unstyled p-3">
                <li><h2 className="text-white mb-4">Menu</h2></li>
                <li className="mb-3">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" value={pesquisa} onInput={(e) =>pesquisar(e)} />
                    </form>
                </li>
                {
                    rotasFiltradas.map(rota => (
                        <li className="fs-5 mb-3" key={rota.url}>
                            <a href={rota.url} className="text-white text-decoration-none d-block py-2 px-3 rounded">
                                {rota.nome}
                            </a>
                        </li>
                    ))
                }

            </ul>
            <div className="p-3 text-center">
                <span className="text-white-50">© 2024 GymApp</span>
            </div>
        </div>
    );
}
