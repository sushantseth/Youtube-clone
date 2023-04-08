import { useRouteError } from "react-router-dom"

export default function ErrorComponent(){
    const {status, statusText} = useRouteError()
    console.log(status)
    return(
        <>
        <h1>Page content not loading!!</h1>
        <h3>{statusText}</h3>

        </>
    )
}