import './HeaderComponent.css'
import React, { useState, useEffect } from 'react';
import ConsumirContaApi from '../../services/ConsumirContaApi';

const HeaderComponent = ({ onDataChange }) => {

    const [dataInicioValue, setDataInicio] = useState('')
    const [dataFimValue, setDataFim] = useState('')
    const [nomeOperadorValue, setNomeOperador] = useState('')
    const [contaValue, setConta] = useState('')
    const [contas, setContas] = useState([]);

    useEffect(() => {
        ConsumirContaApi()
            .then(response => response.json())
            .then(data => setContas(data))
            .finally()
    }, [])

    const dataInicio = (event) => {
        setDataInicio(event.target.value)
    }

    const dataFim = (event) => {
        setDataFim(event.target.value)
    }

    const nomeOperador = (event) => {
        setNomeOperador(event.target.value)
    }

    const conta = (event) =>{
        setConta(event.target.value)
    }

    const pesquisarClick = (event) => {
        event.preventDefault();
        onDataChange({ dataInicioValue, dataFimValue, nomeOperadorValue, contaValue })
    }

    return (
        <form className="header" onSubmit={pesquisarClick}>
            <div className='conta'>
                <h3>Escolha uma conta</h3>
                <select required className='select-conta' defaultValue="" onChange={conta}>
                    <option value="" disabled hidden>Selecione uma opção</option>
                    {contas.map(item => (
                        <option value={item['idConta']} key={item['idConta']}>{item['idConta']} - {item['nomeResponsavel']}</option>
                    ))}
                </select>
            </div>
            <div className="date-inputs">
                <span>
                    <h3>Data de início</h3>
                    <input type="date" className='input' onChange={dataInicio} />
                </span>
                <span>
                    <h3>Data de Fim</h3>
                    <input type="date" className='input' onChange={dataFim} />
                </span>
                <span>
                    <h3>Nome do operador transacionado</h3>
                    <input type="text" placeholder="Insira um nome" className="input" onChange={nomeOperador} />
                </span>
            </div>
            <div className="pesquisar">
                <button type='submit'>Pesquisar</button>
            </div>
        </form>
    );
};

export default HeaderComponent;