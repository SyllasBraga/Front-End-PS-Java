import './TableComponent.css'
import '../Header/HeaderComponent'
import HeaderComponent from '../Header/HeaderComponent'
import React, { useState, useEffect } from 'react';

const TableComponent = () => {

    const [filtros, setFiltros] = useState('')

    useEffect(() => {
      console.log(filtros);
    }, [filtros])
  
    const filtrosPassados = (data) => {
      setFiltros(data);
    }

    return (
        <>
            <HeaderComponent onDataChange={filtrosPassados}/>
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
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TableComponent;