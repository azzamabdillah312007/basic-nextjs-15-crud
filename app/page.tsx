import TodoList from "./_components/todo-list";
import Form from "./_components/form-todo";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default async function Home() {
  const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
    next:{
      tags: ["todo"]
    }
  });
  const data: Todo[] = await rest.json();



  return (
    <main>
      <h2>Todo List</h2>
      <Form />
      <section className="todo_list">
        {!!data &&
          data.map((todo) => (
            <div key={todo.id} className="card">
              <TodoList todo={todo} />
            </div>
          ))}
      </section>
    </main>
  );
}
