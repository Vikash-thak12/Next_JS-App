
const index = (props) => {
    // console.log(props.data.users);
    const user = props.data.users
    return (
      <div>
        <h1>Users</h1>
        {
          user.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))
        }
      </div>
    )
  }
  
  export const getStaticProps = async () => {
    const user = await (await fetch("https://dummyjson.com/users")).json();
    return {
      props: { 
        data: user,
       },
    }
  }
  
  export default index
  