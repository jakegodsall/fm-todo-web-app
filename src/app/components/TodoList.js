import TodoItem from './TodoItem';

const TodoList = ({ list }) => {
    return (
        <div className='mx-2 w-full rounded-lg bg-primary'>
            <ul className='flex flex-col'>
                {list.map((item, key) => {
                    return (
                        <li key={key}>
                            <TodoItem item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
