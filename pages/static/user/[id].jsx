import React from 'react'

const userInfo = (props) => {
    // console.log(props.data);
    const user = props.data
  return (
    <div>
      <h1>The profile of {user.firstName}</h1>
    </div>
  )
}

export const getStaticPaths = async () => {
  const allusers = await (await fetch("https://dummyjson.com/users")).json();
  const userById = allusers.users.map(user => user.id)

    return {
      paths: userById.map(userId => ({ params: { id: `${userId}`}})),
      fallback: false,
    };
  };

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    return {
        props: {
            data,
        },
    }
}

export default userInfo

// import React from 'react'

// const userInfo = () => {
//   return (
//     <div>
//       hey buddy
//     </div>
//   )
// }

// export default userInfo
