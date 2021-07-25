import './style.css';

const SearchResultItem = ({ name, email }) => {
    return (
        <div className="result-item">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
        </div>
    );
}

export default SearchResultItem;