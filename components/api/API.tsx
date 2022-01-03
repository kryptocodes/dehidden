import axios from "axios"
import React,{useEffect,useState} from "react"

interface dataProps {
    data:{
        url:string
    }
    loading: boolean
    error: any 
}

export const FetchAPI = () => {
    const [data, setData] = useState<dataProps>({
        loading: true,
        error: null,
        data: {
            url: ""
        }
    });
    useEffect(() => {
    axios.get('https://run.mocky.io/v3/999e010a-be44-4f22-a232-5cbed044c141')
        .then(res => {
           setData({
                loading: false,
                error: null,
                data: res.data
           })
        }
    ).catch(err => {
        setData({
            loading: false,
            error: err,
            data: {
                url: ""
            }
        })
    })
    }, [])
    return data
}

