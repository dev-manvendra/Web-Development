import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
    
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>{
            if(!response.ok)
            {
                throw new Error("file not found");
            }
            return response.json();
        })
        .then((response)=>{
            setData(response[currency]);
        })
        .catch((error)=>{
            console.error(error);
        });
        
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;

