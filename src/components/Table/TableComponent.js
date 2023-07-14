import './TableComponent.css';

const TableComponent = () => {
    return (
        <div className="table-content">
            <div className="saldo-infos">
                <div className="lbl-saldo">
                    <label>Saldo total: R$1200,00</label>
                </div>
                <div className="lbl-saldo">
                    <label>Saldo no período: R$550,00</label>
                </div>
            </div>
            <div className="tabela">
                <table>
                    <tr>
                        <th>Data</th>
                        <th>Valencia</th>
                        <th>Tipo</th>
                        <th>Nome do operador transacionado</th>
                    </tr>
                    <tr>
                        <td>10/10/2020</td>
                        <td>R$ 200,00</td>
                        <td>Saque</td>
                        <td>Beltrano</td>
                    </tr>
                    <tr>
                        <td>10/10/2020</td>
                        <td>R$ 200,00</td>
                        <td>Saque</td>
                        <td>Beltrano</td>
                    </tr>
                    <tr>
                        <td>10/10/2020</td>
                        <td>R$ 200,00</td>
                        <td>Saque</td>
                        <td>Beltrano</td>
                    </tr>
                    <tr>
                        <td>10/10/2020</td>
                        <td>R$ 200,00</td>
                        <td>Saque</td>
                        <td>Beltrano</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;