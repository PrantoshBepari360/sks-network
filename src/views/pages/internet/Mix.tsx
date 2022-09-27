import { Link } from "react-router-dom";

export const Mix = () => {
  return (
    <div className="py-7">
      <Link to="/pricing">
        <button className="mr-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          Corporate
        </button>
      </Link>
      <Link to="/pricing2">
        <button className="mr-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          SME
        </button>
      </Link>
      <Link to="/pricing3">
        <button className="mr-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          Home
        </button>
      </Link>
      <Link to="/pricing4">
        <button className="mr-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          এক দেশ এক রেট
        </button>
      </Link>
    </div>
  );
};
