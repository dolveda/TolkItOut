import { useLocation } from "react-router-dom";

export default function Book() {
    const location = useLocation()
    const {item} = location.state
    
    const loading = () => {
        return <h1>Loading...</h1>
    };
    
    const loaded = () => {
        return (
            <div>
                <h1 className="title">{item.title}</h1>
                <br/>
                <div className="bookInfo">
                    <h3>Info:</h3>
                    <ul>
                        <li>First Published: {item.first_publish_year}</li>
                        <li>Editions: {item.edition_count}</li>
                        <li>Average Rating: {item.ratings_average}</li>
                        <li>Time: {item.time}</li>
                        <li>Characters: {item.person}</li>
                        <li>Places: {item.place}</li>
                    </ul>
                    <br/>
                    <section className="link">
                        <p>For more info please click the following link to Open Library and select your language:</p>
                        <a href={"https:/openlibrary.org" + item.key} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </section>
                </div>
            </div>
        );
    }
    return <section>{item ? loaded() : loading()}</section>;
}