import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.jpg";

function NotFound() {
  return (
    <div className="notfound">
      <div className="container">
        <img src={notFoundImg} alt="page is not found" />
        <h2>Ooops... page not found!</h2>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
