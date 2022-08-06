
import { useState,useEffect ,useCallback} from "react"

const GithubUsers = ({login,query}) => {

    const [data,setData] = useState([])

    const fetchData = useCallback( () =>{
        fetch(`https://api.github.com/users`)
        .then(res => res.json())
        .then(setData)
      },[])
    
      useEffect(() => {
        fetchData()
      },[fetchData])

      const filteredUserList = data.filter(
        item => {
            return (
                item.login.toLowerCase().includes(query.toLowerCase())
            )
        }
      )

    if (data){
        return(
            <ul className='divide-y divide-gray-200'>
                {
                filteredUserList
                .map(user => (
                <li key={user.id}  className="px-3 py-3 flex items-start">
                    <img className="rounded-full h-20 w-20 flex items-center justify-center ring-4 ring-blue-500 ring-opacity-50" src={user.avatar_url} with={50} height={50} />  
                       <div className="flex-grow ml-5">
                        <div className="flex items-center">
                            <span className="flex-none font-medium text-1xl text-blue-500">  {user.login}</span>
                            {/* <span className="flex-grow text-right">{user.url}</span> */}
                        </div>
                        <div><b className="font-bold text-blue-200">Node id:</b> {user.node_id}</div>
                        <div className="leading-tight">{user.url}</div>
                        </div>
                 
                  
                    </li>
                ))
            }
             </ul>        
        )}
      
}

export default GithubUsers