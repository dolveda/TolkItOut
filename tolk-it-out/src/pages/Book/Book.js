import { useLocation } from "react-router-dom";

export default function Book() {
    const location = useLocation()
    const {item} = location.state
    console.log(item)
    return (
        <h1>{item.title}</h1>
    );
}