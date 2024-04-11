import link from "next/link";

export const metadata = {
  title: "Home",
  description: "Home page",
}


export default function Home() {
  return (
    <main >
      <h1>dsds</h1>
      <Link rel="stylesheet" href="/henry" prefetch={false}/>
    </main>
  );
}
