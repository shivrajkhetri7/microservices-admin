import React,{useState,useEffect} from "react";

/**
 * @description This is Custome Hoook which use to fetch the data from the get API
 * @shivrajkhetri7
 * @param props {URL}
 * @returns 
 */

interface UseFecthInterface {
    URL:string
}
export const useFecth=(props:UseFecthInterface)=>{
    const {URL} = props;
    const [loading ,setLoading] = useState<boolean>(true);
    const [data ,setData]= useState<any>();
    const [error , setError] = useState<any>();

    useEffect(()=>{
        fetch(URL).then((response)=>{
            const data = response.json();
            setLoading(false);
            setData(data);
        }).catch((error)=>{
            setLoading(false)
            setError(error)
        })
    },[])

    return [loading , data ,error];
}