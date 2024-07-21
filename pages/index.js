import { useSession, signIn, signOut} from "next-auth/react"
import styles from "../styles/User.module.css"
export default function Home() {
  const session = useSession()

  if(session.data === null) {
    return <div className={styles.main}><button className={styles.btn} onClick={signIn}>Login</button></div>
  }
  return (
    <>
      <div className={styles.main}>
        <h1>Authorized</h1>
        <h1>Hello, {session?.data?.user?.name}</h1>
        <button className={styles.btn} onClick={signOut}>Logout</button>
      </div>
    </>
  );
}
