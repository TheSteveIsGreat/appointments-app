import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Users = (props) => {
  const [{data, loading, error}] = useAxios ('api/users')
  if (loading) return <p>Loading</p>
  if (error) return alert("Error occurred getting users")
  return (
    <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
       <List name='Users'
         data={data}
         renderData={(user)=> { 
         return(
             <Link to={`/users/${user.id}`}>
               <Card>
                   <p>{user.name}</p>
               </Card>
             </Link>
         )} 
       }
       />
    </AxiosContainer>
)
}

export default Users