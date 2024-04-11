import link from "next/link";

export default function Footer() {

return (
    <main>
      <nav className="bg-black text-white p-2">
        <ul className="flex gap-2">
          <li>
            <Link prefetch={false} href="/">Home</Link>
          </li>
          <li>
            <Link prefetch={false} href="/henry">Henry</Link>
          </li>
        </ul>
      </nav>
    </main>
  ); }