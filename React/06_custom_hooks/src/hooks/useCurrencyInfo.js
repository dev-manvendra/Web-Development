import { useState, useEffect } from "react";


function useCurrencyInfo(currnecy) {
    
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            setData =  response[currency];
        });
    }, [currnecy]);
    
    return data;
}

export default useCurrencyInfo;

