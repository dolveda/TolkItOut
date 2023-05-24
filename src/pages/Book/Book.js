import { useLocation } from "react-router-dom";
import './Book.css'

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
                    <ul className="info-list" >
                        <li className="info-item">First Published: {item.first_publish_year}</li>
                        <li className="info-item">Editions: {item.edition_count}</li>
                        <li className="info-item">Average Rating: {item.ratings_average}</li>
                        <li className="info-item">Time: {item.time}</li>
                        <li className="info-item">Characters: {item.person}</li>
                        <li className="info-item">Places: {item.place}</li>
                    </ul>
                    <br/>
                    <section className="OL-link">
                        <p>For more info please click the following link to Open Library and select your language:</p>
                        <a href={"https:/openlibrary.org" + item.key} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </section>
                </div>
            </div>
        );
    }
    return <section>{item ? loaded() : loading()}</section>;
}