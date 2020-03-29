import {useEffect} from 'react';

function useCounterHook(count) {
    useEffect(()=>{
        document.title = `Title : ${count}`
    });
}
export default useCounterHook;