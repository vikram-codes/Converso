import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Converso Logo"
            width={46}
            height={44}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <Link href="/sign-in">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
