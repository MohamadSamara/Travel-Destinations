import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './TourDetails.css';
function TourDetails({ tour }) {
    const [readMore, setreadMore] = useState(false);
    let { id } = useParams();
    const result = tour.filter((value) => value.id === id);
    return (
        <div className="card" key={id}>
            <img src={result[0].image} alt={result[0].name} className='myImg'/>

                {
                    readMore ? `description : ${result[0].info}`
                        : `description : ${result[0].info.substring(0, 200)}...`
                }

                <button onClick={() => setreadMore(!readMore)}>
                    {!readMore ? "show more" : "show less"}
                </button>
        </div>
    );
}
export default TourDetails;