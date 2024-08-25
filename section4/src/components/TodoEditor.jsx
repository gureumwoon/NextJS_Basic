import { useContext, useRef, useState } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from './TodoContext';

export default function TodoEditor() {

    const { onCreate } = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onClick = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="TodoEditor">
            <input ref={inputRef} value={content} onChange={onChangeContent} placeholder='새로운 Todo ...' />
            <button onClick={onClick}>추가</button>
        </div>
    )
}
