import './HeaderComponent.css'
import React, { useState } from 'react';

const HeaderComponent = ({onDataChange}) => {

    const [dataInicioValue, setDataInicio] = useState('');
    const [dataFimValue, setDataFim] = useState('');
    const [nomeOperadorValue, setNomeOperador] = useState('');

    const dataInicio = (event) =>{
        setDataInicio(event.target.value)
    }

    const dataFim = (event) =>{
        setDataFim(event.target.value)
    }

    const nomeOperador = (event) => {
        setNomeOperador(event.target.value)
    };

    const pesquisarClick = () => {
        console.log(dataInicioValue)
        console.log(dataFimValue)
        console.log(nomeOperadorValue)
    };

    return (
        <div className="header">
            <div className="date-inputs">
                <span>
                    <h3>Data de início</h3>
                    <input type="date" className='input' onChange={dataInicio}/>
                </span>
                <span>
                    <h3>Data de Fim</h3>
                    <input type="date" className='input' onChange={dataFim}/>
                </span>
                <span>
                    <h3>Nome do operador transacionado</h3>
                    <input type="text" placeholder="Insira um nome" className="input" onChange={nomeOperador}/>
                </span>
            </div>
            <div className="pesquisar">
                <button onClick={pesquisarClick}>Pesquisar</button>
            </div>
        </div>
    );
};

export default HeaderComponent;