
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* Purple title bar */}
      <div className="ui fixed menu">
        <div className="ui container center">
          <h1> Contact Manager </h1>
        </div>
      </div>

      {/* Nav links below the bar */}
      <div className="sub-nav">
        <Link to="/">Contact List</Link>
        <Link to="/add">Add Contact</Link>
      </div>
    </div>
  );
};
export default Header;
