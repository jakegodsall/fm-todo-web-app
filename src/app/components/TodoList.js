import Card from './UI/Card';
import TodoItem from './TodoItem';

const TodoList = ({ list }) => {
    return (
        <Card className=''>
            <ul className='flex flex-col'>
                {list.map((item, key) => {
                    return (
                        <li key={key}>
                            <TodoItem item={item} />
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default TodoList;
