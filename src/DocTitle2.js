import React, {useState, useEffect} from 'react';
import counterHook from './hooks/useCouterHook';

function testHook() {
    console.log(">>>>>>>>>>>>>>>>>>>>>>> hoookkkk");

}

function DocTitle2() {
    const [count,
        setCount] = useState(0);
    console.log(">>>>>>>>>>>>count>>>>>>>>>>>", count);

    testHook();
    counterHook(count);
    return ( <> <button onClick={() => setCount(count + 1)}>count : {count}</button> < />
    )    
}

export default DocTitle2;