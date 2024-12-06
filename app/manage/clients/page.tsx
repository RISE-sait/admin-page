import ManageClientContent from "./pageContent"

const JWTSecret = process.env.JWTSecret as string

export default function () {
    return <ManageClientContent JWTSecret={JWTSecret} />
}