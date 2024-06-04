import "/styles.css"
import { useState } from "react"
import { useEffect } from "react"

export function App () {
    const [follow, setFollow] = useState(false)
    const [position, setPosition] = useState({x: -60, y: -60})
    useEffect(() => {
        const createAnimation = (e) => {
            const positionX = e.clientX - 25
            const positionY = e.clientY - 25
            setPosition({x: positionX, y: positionY})
        }
        follow && window.addEventListener('pointermove', createAnimation)
        return () => {
            removeEventListener('pointermove', createAnimation)
        }
    }, [follow])
    const handleClick = () => {
        setFollow(!follow)
    }
    return (
        <>
        <div className={!follow ? "circle hide" : "circle show"} style={{
            top: position.y,
            left: position.x,
        }}/>
        <button className= "btnFollow "onClick= {handleClick}>{!follow ? "Seguir cursor" : "Dejar de seguir"}</button>
        </>
    )
}
