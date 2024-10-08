import { useState, useCallback } from 'react';
import UseCallbackChild from './UseCallbackChild';

function UseCallback() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>UseCallback</h2>
            <p>Count: {count}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <UseCallbackChild handleIncrement={handleIncrement} />
        </div>
    );
}

export default UseCallback;