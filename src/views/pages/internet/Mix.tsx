import { Link } from "react-router-dom";

export const Mix = () => {
  return (
    <div className="w-11/12 mx-auto py-7 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      <Link to="/pricing">
        <button className="mr-1 mb-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          Corporate
        </button>
      </Link>
      <Link to="/pricing2">
        <button className="mr-1 mb-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          SME
        </button>
      </Link>
      <Link to="/pricing3">
        <button className="mr-1 mb-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          Home
        </button>
      </Link>
      <Link to="/pricing4">
        <button className="mr-1 mb-1 px-4 py-1 text-gray-700 bg-gray-100 border hover:bg-gray-200 border-gray-700 rounded">
          এক দেশ এক রেট
        </button>
      </Link>
    </div>
  );
};
