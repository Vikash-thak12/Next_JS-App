import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../../../styles/User.module.css"

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

const index = () => {

    const router = useRouter()
    const id = router.query.id;

    const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher)
    if (!data) return <div className={styles.main}>Loading...</div>
    if (error) return <h1>Error happened</h1>
    return (
        <div className={styles.main}>
            <h1>UserName: {data?.firstName}</h1>
            <h1>Gmail: {data?.email}</h1>

            <button className={styles.btn} onClick={(e) => router.replace("/user")}>click to go back to the home page</button>
        </div>
    )
}

export default index


























