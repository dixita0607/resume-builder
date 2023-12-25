import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/first">Resume 1</Link>
        </li>
        <li>
          <Link to="/second">Resume 2</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
