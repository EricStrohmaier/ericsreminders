import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <div>
      <header className="mb-20 mt-16 flex content-center items-center justify-between">
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
        <div className="flex justify-between gap-4">
          <ThemeToggle/>
        </div>
      </header>
    </div>
  );
}