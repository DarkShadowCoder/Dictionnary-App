import { useEffect, useState } from "react"

export const [data, setData] = useState([])

export const request =(word: string)=>{
    useEffect(() =>{
        fetch("https://api.dictionnaryapi.dev/api/v2/entries/en/"+{word})
        .then(response => response.json())
        .then(donnees => setData(donnees))
        .catch(error => console.log(error))
    }, [])
    console.log(data)
    return data;
}