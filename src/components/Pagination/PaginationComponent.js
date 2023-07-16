import './PaginationComponent.css'

const PaginationComponent = ( {totalPages, onPageChange, pageAtual }) => {

    const gerarPaginaççao = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span
                    key={i}
                    className={i === (pageAtual+1)? 'active' :''}
                    onClick={() => onPageChange(i - 1)}
                >
                    {i}
                </span>
            )
        }
        return pages
    }

    return <div className="pagination">{gerarPaginaççao()}</div>
};

export default PaginationComponent;