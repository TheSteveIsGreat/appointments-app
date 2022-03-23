import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJSON from '../components/StringifyJSON'
import {useParams} from 'react-router-dom'

const DoctorShow = (props)=>{
 const {id} = useParams()
 const [{data, loading, error}] = useAxios(`/api/doctors/${id}`) 
 return (
     <AxiosContainer loading={loading} error={error} >
        <StringifyJSON json={data} />
     </AxiosContainer>
 )
}
export default DoctorShow