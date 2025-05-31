export default function MovieCards({ movie, onClose }) {
  return (
    <div className="movieView">
      <button onClick={onClose} className="closeBtn">X</button>
      <img src={movie.img} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  );
}
