export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>

        <p className="mb-6 text-xl text-gray-600">
          Oops! Page not found
        </p>

        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
