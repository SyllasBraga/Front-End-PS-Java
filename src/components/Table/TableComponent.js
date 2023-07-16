import './TableComponent.css'
import HeaderComponent from '../Header/HeaderComponent'
import PaginationComponent from '../Pagination/PaginationComponent';
import React, { useState, useEffect } from 'react';
import ConsumirApi from '../../services/ConsumirApi';

const TableComponent = () => {

    const [filtros, setFiltros] = useState('')
    const [transferencias, setTransferencias] = useState([])
    const [page, setPage] = useState('')
    const [pageAtual, setPageAtual] = useState(0)

    const formataSaldo = (saldo) => {
        if (saldo) {
            return saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else {
            return 'R$00,00'
        }
    }

    const formataData = (data) => {
        const dia = data.slice(0, 4);
        const mes = data.slice(5, 7);
        const ano = data.slice(8, 10);
        return `${ano}/${mes}/${dia}`;
    }

    useEffect(() => {
        if (filtros) {
            ConsumirApi(filtros, pageAtual)
                .then(response => response.json())
                .then(data => {
                    setPage(data)
                    setTransferencias(data.content)
                })
                .finally()
        }
    }, [filtros, pageAtual])

    const alterarPagina = (data) => {
        ConsumirApi(filtros, data)
            .then((response) => response.json())
            .then((data) => {
                setPage(data);
                setTransferencias(data.content)
                setPageAtual(data.number)
            })
            .finally()
    };

    const filtrosPassados = (data) => {
        setFiltros(data)
        setPageAtual(0)
    }

    return (
        <>
            <HeaderComponent onDataChange={filtrosPassados} />
            <div className="table-content">
                <div className="saldo-infos">
                    <div className="lbl-saldo">
                        <label>Saldo total: {formataSaldo(transferencias[0]?.conta.saldoTotal)}</label>
                    </div>
                    <div className="lbl-saldo">
                        <label>Saldo no período: {formataSaldo(transferencias[0]?.conta.saldoPeriodo)}</label>
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
                            {transferencias.map(transferencia => (
                                <tr key={transferencia['id']}>
                                    <td>{formataData(transferencia['dataTransferencia'])}</td>
                                    <td>{formataSaldo(transferencia['valor'])}</td>
                                    <td className='tipoTransferencia'>{transferencia['tipo']}</td>
                                    <td>{transferencia['nomeOperadorTransacao']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <PaginationComponent
                onPageChange={alterarPagina}
                totalPages={page.totalPages}
                pageAtual={pageAtual}
            />
        </>
    );
};

export default TableComponent;