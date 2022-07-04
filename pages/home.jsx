import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
export default function Home({ data }) {
    return (
        <Layout title='home' description='description home'>
            <h1>
                home
            </h1>
            <ul>
                {
                    data?.map(d => (

                        <li key={d.id}>
                            <Link href={`/users/${d.id}`}>
                                <a > {d.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </Layout>
    )
}

export async function getStaticProps() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}

