import React , {useState} from "react";


const NewStateCounter = () => {

    const [count , setCount] = useState(0);

    function HandleAdd() {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {HandleAdd}>Add</button>
            <button onClick = {() => setCount(count-1)}>Sub</button>
            <button onClick = {() => setCount(0)}>Reset</button>
        </div>
    )
}

export default NewStateCounter;