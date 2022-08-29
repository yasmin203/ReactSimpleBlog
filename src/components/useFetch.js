
import{useState,useEffect} from 'react'
const useFetch=(url)=>{
    const [data, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const[errMsg,setErrMsg]=useState(null)
  
    useEffect(() => {
      setIsLoading(true)
      fetch(url)
        .then((res) => {
          console.log(res)
  
          if (!res.ok)
          throw Error(res.statusText ? res.statusText:"Erorr")
          return res.json()
        })
        .then((data) => {
          setPosts(data)
          setIsLoading(false)
        }).catch(err=>{
          setIsLoading(false)
         setErrMsg(err.message)
        })
    }, [url])
    return{data,isLoading,errMsg}
}
export default useFetch