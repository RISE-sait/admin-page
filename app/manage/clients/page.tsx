import { Client } from "@/app/types/Clients/client"
import ManageClientContent from "./pageContent"

const JWTSecret = process.env.JWTSecret as string


export default async function () {
    const response = await fetch(`http://localhost:5000/api/customer/`, {
        headers: {
            authorization: `Bearer ${JWTSecret}`
        }
    })

    const data: Client[] = await response.json()

    return <ManageClientContent clients={data} />
}