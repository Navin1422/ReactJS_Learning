import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

const UseEffectFetchApi = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        const fun1 = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        };
        fun1();
    },[data])

    return (
        <div>
            <h1>Fetch API using useEffect</h1>
        </div>
    )
}

export default UseEffectFetchApi;