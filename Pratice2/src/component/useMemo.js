import { useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);

    const result = (num) => {
        console.log("Result is...");
        return num * 12;
    };

    const value = useMemo(() => {
        return result(count);
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>Count multiplied by 12 is {value}</h2>
        </div>
    );
};

export default UseMemo;