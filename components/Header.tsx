import Link from "next/link";
const Header = () => {
  return (
    <header className="py-4 px-6 container mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Job Board
      </Link>
      <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
        <Link href="/login" className="bg-gray-200">
          Login
        </Link>
        <Link href="/new-listing" className="bg-blue-600 text-white">
          Post a job
        </Link>
      </nav>
    </header>
  );
};
export default Header;