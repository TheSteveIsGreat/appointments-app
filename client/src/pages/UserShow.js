import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJSON'
import {useParams} from 'react-router-dom'

const UserShow = (props)=>{
 const {id} = useParams()
 const [{data, loading, error}] = useAxios(`/api/users/${id}`) 
 return (
     <AxiosContainer loading={loading} error={error}>
        <StringifyJson json={data} />
     </AxiosContainer>
 )
}
export default UserShow