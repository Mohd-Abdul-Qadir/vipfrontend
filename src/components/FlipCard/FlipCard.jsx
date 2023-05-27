import { useNavigate } from "react-router-dom";
import "./FlipCard.css";

export default function FlipCard({ category }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`product-category/${category.name}`)}
        className="flip-card"
      >
        <div class="flip-card-inner">
          <div className="flip-card-front">
            <img src={category.image} alt="Avatar"></img>
          </div>
          <div className="flip-card-back">
            <h2 style={{ color: "white" }}>{category.name}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
