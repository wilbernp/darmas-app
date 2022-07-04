import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function User() {
    let [user, setUser] = useState({})
    let router = useRouter()
    let { id } = router.query

    useEffect(() => {
        (async function () {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let user = await res.json()
            setUser(user)
        })()

    })
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            </div>
    )
}




// export async function getStaticsProps() {
//     // Return a list of possible value for id
    // let router = useRouter()
    // let {id} = router.query
    // // let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // // let user = await res.json()

//     // console.log(user)
//     return{
//         props:{
//             id
//         }
//     }
//   }