import { Link } from "react-router-dom";

export default function Else() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl px-5 py-15 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Error 404</h1>
        <p className="mt-3 text-gray-800">Page Not Found</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-2xl bg-black-800 px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
