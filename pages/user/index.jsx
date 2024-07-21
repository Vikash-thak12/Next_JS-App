import Link from 'next/link'; 
import useSWR from "swr"
import kuchbhi from "../../styles/User.module.css"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const index = () => {

    const {data, error} = useSWR("https://dummyjson.com/users", fetcher)
    if(!data) return <div className={kuchbhi.main}>Loading...</div>
    if(error) return <h1 >Error happened</h1>
  return (
    <div>
        <h1>Users</h1>
        {
            data.users.map((value) => (
                <Link href={`user/${value.id}`} key={value.id}><li>{value.firstName}</li></Link>
            ))
        }
    </div>
  )
}

export default index