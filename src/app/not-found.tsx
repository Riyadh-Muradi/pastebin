import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative top-[20vh] flex h-[600px] flex-col items-center justify-center rounded-lg bg-white px-2 py-4 backdrop-blur-lg backdrop-filter sm:px-6 md:px-4 lg:px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">404</h1>
        <p className="text-black">
          Oops - The page youre looking for doesnt exist.
        </p>
      </div>
      <Link
        className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-black px-8 text-sm font-medium text-gray-50 transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        href={"/"}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
