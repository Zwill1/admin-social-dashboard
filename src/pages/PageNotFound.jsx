import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <section className="bg-gray-600 h-screen flex">
        <div className="mx-auto container items-center justify-center flex">
          <div className="bg-gray-100 py-10 px-10 w-10/12 lg:w-1/2 rounded-2xl text-center">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-black">
              Page Not Found!
            </h1>
            <p className="mt-6">
              The page you are looking for is not available. Use this{" "}
              <Link to="/" className="font-bold text-black">
                link
              </Link>{" "}
              to go back to the home page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
