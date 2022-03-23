import useAxios from "axios-hooks"
import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"

const Appointments = (props) => {
  const [{data, loading, error}] = useAxios('/api/appointments') 
 return (
     <AxiosContainer loading={loading} error={error}>
        <List name='Appointments'
          data={data}
        />
     </AxiosContainer>
 )
}

export default Appointments