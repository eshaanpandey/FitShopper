import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">FitShopper</h1>
        <nav>
          <Link to="/" className="px-4">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
