import { Nav } from "./Nav"

export const ListarContratos = () =>
{
    return(
        <>
            <div className="d-flex">
                <Nav/>
                <div className="flex-grow-1 p-4">
                    <table>
                        <thead>
                            <tr>
                                <th>ada</th>
                                <th>dada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>oi</td>
                                <td>dfdghgdf</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}