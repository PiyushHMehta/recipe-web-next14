import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-8">Welcome to Recipe App</h1>
      <Link href={'/recipe-list'} className="bg-yellow-300 hover:bg-yellow-200 text-slate-900 hover:text-slate-800 py-2 px-4 rounded-md shadow-sm">Explore Recipes</Link>
    </div>
  );
}
