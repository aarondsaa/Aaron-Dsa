import React, { useState } from 'react';
import '../App.css';

function PrettyCounter() {
    const [count, setCount] = useState(0);

    const decrease = () => count > 0 && setCount(count - 1);
    const increase = () => setCount(count + 1);

    return (
        <div className="prettycounter">
            <div className="counterlabel">Pretty Counter</div>
            <button className="counterbutn" onClick={decrease}>-</button>
            <span className="countervalue">{count}</span>
            <button className="counterbutn" onClick={increase}>+</button>
        </div>
    );
}

export default PrettyCounter;
