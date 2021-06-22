import React, { useEffect, useState } from 'react'

const getLocalStorage=(key)=>{

    const savedValue=JSON.parse(localStorage.getItem(key));
    
    if(savedValue) return savedValue
    
    }

function useLocalStorage(key) {
    const [value,setValue]=useState(()=>{
        return getLocalStorage(key);
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
    return (
        [value,setValue]
    )
}

export default useLocalStorage;
