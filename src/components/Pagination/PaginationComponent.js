import './PaginationComponent.css'

const PaginationComponent = ({ onDataChange }) => {
    return (
        <div class="pagination">
            <span class="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
    );
};

export default PaginationComponent;