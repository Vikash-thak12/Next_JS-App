
const user = (props) => {
    // console.log(props.data.users);
    const details = (props.data.users)
    return (
    <div>
      <h1>Users</h1>
      {
        details.map(user => (
            <li key={user.id}>{user.firstName}</li>
        ))
      }
    </div>
  )
}

export const getServerSideProps = async () => {
    const user = await (await fetch("https://dummyjson.com/users")).json();
    return {
        props: {
            data: user,
        }
    }
}

export default user
