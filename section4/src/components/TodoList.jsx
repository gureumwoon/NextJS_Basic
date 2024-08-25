import { useContext, useMemo, useState } from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'
import { TodoStateContext } from './TodoContext';

export default function TodoList() {
    const todos = useContext(TodoStateContext)

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterTodos = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    };

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos]);

    return (
        <div className="TodoList">
            <h4>Todos</h4>
            <div>
                <div>전체 todo : {totalCount}</div>
                <div>완료 todo : {doneCount}</div>
                <div>미완 todo : {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
            <div className='todos_wrapper'>
                {filterTodos().map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    )
}
