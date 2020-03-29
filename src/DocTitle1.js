import React, {useState, useEffect} from 'react';
import counterHook from './hooks/useCouterHook';

function DocTitle1() {
    const [count, setCount] = useState(0);
    counterHook(count);
    return (
        <>
            <button onClick={() => setCount(count+1)}>count : {count}</button>
        </>
    )    
}

export default DocTitle1;