import "../css/Recommendations.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Recommendations() {
  const { recommendations } = useMovieContext(); // Assuming recommendations are fetched here

  if (recommendations && recommendations.length > 0) {
    return (
      <div className="recommendations">
        <h2>Your Movie Recommendations</h2>
        <div className="movies-grid">
          {recommendations.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations-empty">
      <h2>No Recommendations Available</h2>
      <p>We don't have any recommendations for you right now. Check back later!</p>
    </div>
  );
}

export default Recommendations;
