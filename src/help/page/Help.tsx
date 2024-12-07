import { Link } from "react-router-dom";

function Help() {
  return (
    <div>
      <h1>Help</h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
    </div>
  );
}

export default Help;
