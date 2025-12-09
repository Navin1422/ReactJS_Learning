import React ,{useEffect}from 'react';
import {useState} from 'react';
// inside use effect there is something called dependency Array , useEffect will be triggered when useState is accessed or triggered[useState is present in dependency array of useEffect]
const UseEffectComponent = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState();

    function WhoAreYou(){
        console.log("Zoro ONE PIECE");
    }

    useEffect( () => {
        WhoAreYou();
        //console.log("Zoro ONE PIECE");
    },[count,name])
    return(
        <div>
            <h1>Use Effect</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
        </div>
    )
}
export default UseEffectComponent;