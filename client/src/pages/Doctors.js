import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"
import useAxios from "axios-hooks"

const Doctors = (props) => {
  const [{data, loading, error}] = useAxios ('/api/doctors')
  return (
    <AxiosContainer loading={loading} error={error}>
      <List name='Doctors' data={data} />
    </AxiosContainer>
  )
}

export default Doctors