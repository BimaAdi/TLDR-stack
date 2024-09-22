import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "TLDR" },
		{ name: "description", content: "TLDR Remix template" },
	];
};

export default function Index() {
	return (
		<main className="w-screen h-screen grid place-items-center">
			<div>
				<h1 className="text-xl text-center">TLDR Stack</h1>
				<Link
					to="/todo-client"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					Todo Client Example
				</Link>
			</div>
		</main>
	);
}
