import "/styles.css"
import { useState } from "react"

export function App () {
    const [follow, setFollow] = useState(false)
    const handleClick = () => {
        setFollow(!follow)
    }
    return (
        <>
        <div className={!follow ? " circle hide" : " circle show"}/>
        <button className= "btnFollow "onClick= {handleClick}>{!follow ? "Seguir cursor" : "Dejar de seguir"}</button>
        </>
    )
}
