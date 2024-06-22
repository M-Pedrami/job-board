import { getUser, getSignInUrl, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
export default async function Header() {
  const { user } = await getUser();
  const signIn = await getSignInUrl();
  console.log("USER", user);
  return (
    <header className="py-4 px-6 container mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Job Board
      </Link>
      <nav className="flex gap-2 ">
        {!user && (
          <Link href={signIn} className="px-4 py-2 bg-gray-200 rounded-md">
            Login
          </Link>
        )}
        {user && (
          <>
            {user.profilePictureUrl && (
              <img
                src={user.profilePictureUrl}
                width={50}
                className="rounded-full"
                alt="Profile Picture"
              />
            )}
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                type="submit"
              >
                Logout
              </button>
            </form>
          </>
        )}
        <Link
          href="/new-listing"
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Post a job
        </Link>
      </nav>
    </header>
  );
}
