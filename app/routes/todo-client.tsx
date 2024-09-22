import { CircleCheck, CircleX } from "lucide-react";
import { useState } from "react";
import { Button } from "~/client/components/ui/button";
import { Input } from "~/client/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/client/components/ui/table";

export default function TodoClientPage() {
	const [todoInput, setTodoInput] = useState("");
	const [todoList, setTodoList] = useState<{ todo: string; isDone: boolean }[]>(
		[],
	);

	const addTodo = () => {
		setTodoList([{ todo: todoInput, isDone: false }, ...todoList]);
		setTodoInput("");
	};

	const toggleTodo = (todo: string) => {
		setTodoList(
			todoList.map((x) => {
				if (x.todo === todo) {
					return {
						...x,
						isDone: !x.isDone,
					};
				}
				return x;
			}),
		);
	};

	const deleteTodo = (todo: string) => {
		setTodoList(todoList.filter((x) => x.todo !== todo));
	};

	return (
		<main className="w-screen h-screen grid place-items-center">
			<div className="max-w-[320px] sm:max-w-[1000px] flex flex-col gap-2">
				<div className="flex gap-2">
					<Input
						value={todoInput}
						onChange={(e) => {
							setTodoInput(e.target.value);
						}}
						className="border-2 border-slate-400"
					/>
					<Button onClick={addTodo}>Add Todo</Button>
				</div>
				<Table className="overflow-x-scroll">
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Todo</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{todoList.map((x) => (
							<TableRow key={x.todo}>
								<TableCell className="font-medium">{x.todo}</TableCell>
								<TableCell>
									{x.isDone ? <CircleCheck /> : <CircleX />}
								</TableCell>
								<TableCell className="flex gap-2">
									<Button
										onClick={() => {
											toggleTodo(x.todo);
										}}
									>
										Toggle Status
									</Button>
									<Button
										onClick={() => {
											deleteTodo(x.todo);
										}}
									>
										Delete Todo
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</main>
	);
}
