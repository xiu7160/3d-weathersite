import { useOutlet } from "react-router-dom"
import { useState } from "react"

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [Outlet] = useState(o)
    return <>{Outlet}</>
}

export default AnimatedOutlet;