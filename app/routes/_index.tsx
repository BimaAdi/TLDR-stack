import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "TLDR" },
    { name: "description", content: "TLDR Remix template" },
  ];
};

export default function Index() {
  return (
    <main className="w-screen h-screen grid place-items-center">
      <h1 className="text-xl text-center">TLDR Stack</h1>
    </main>
  );
}
