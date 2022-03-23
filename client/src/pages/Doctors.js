import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"
import useAxios from "axios-hooks"
import { Link } from "react-router-dom"
import Card from "../components/Card"

const Doctors = (props) => {
  const [{data, loading, error}] = useAxios ('api/doctors')
  return (
    <AxiosContainer loading={loading} error={error}>
      <List name='Doctors' 
      data={data}
      renderData={(doctor) => {
        return (
          <Link to={`/doctors/${doctor.id}`}>
            <Card>
              <p>{doctor.name}</p>
            </Card>
          </Link>
        )
      }} />
    </AxiosContainer>
  )
}

export default Doctors