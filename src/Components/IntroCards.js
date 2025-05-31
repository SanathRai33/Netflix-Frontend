import '../CSS/Login.css'

const Card = (props) => {
    const { number, image } = props;
    return (
        <div className="Card">
            <img src={image} alt={`${number}`} />
            <h1>{number}</h1>
        </div>
    );
};
export default Card;
