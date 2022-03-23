import useAxios from 'axios-hooks'

const Users = (props) => {
  const [{data, loading, error}] = useAxios ('api/users')
  if (loading) return <p>Loading</p>
  if (error) return alert("Error occurred getting users")
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default Users