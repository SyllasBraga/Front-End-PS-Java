import DateInput from "../datePicker/datePickerComponent";
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="date-inputs">
                <span>
                    <h3>Data de início</h3>
                    <DateInput className="input" />
                </span>
                <span>
                    <h3>Data de Fim</h3>
                    <DateInput className="input" />
                </span>
                <span>
                    <h3>Nome do operador transacionado</h3>
                    <input type="text" placeholder="Insira um nome" className="input"/>
                </span>
            </div>
            <div className="pesquisar">
                <button>Pesquisar</button>
            </div>
        </div>
    );
};

export default HeaderComponent;