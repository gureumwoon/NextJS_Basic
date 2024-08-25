import { memo, useContext } from 'react';
import './TodoItem.css'
import { TodoDispatchContext } from './TodoContext';

function TodoItem({ id, isDone, createdDate, content }) {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckboc = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckboc} type="checkbox" checked={isDone} />
            <p className='content'>{content}</p>
            <p className='date'>{new Date(createdDate).toLocaleDateString()}</p>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);