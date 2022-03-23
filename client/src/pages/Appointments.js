import useAxios from "axios-hooks"
import { Link } from "react-router-dom"
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import List from "../components/List"

const Appointments = (props) => {
  const [{data, loading, error}] = useAxios('/api/appointments') 
 return (
     <AxiosContainer loading={loading} error={error}>
        <List name='Appointments'
          data={data}
          renderData={(appointment) => {
            return (
              <Link to={`/appointments/${appointment.id}`}>
                <Card>
                  <p>{appointment.appointment_date}</p>
                </Card>
              </Link>
            )
          }}
        />
     </AxiosContainer>
 )
}

export default Appointments