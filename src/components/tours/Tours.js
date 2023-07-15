import { Link } from 'react-router-dom';
import Tour from './tour/Tour';
import './Tours.css'

function Tours({ tour }) {
  return (
    <div className="card">
      {tour.map((obj, i) => (
        <Link to={`/city/${obj.id}`} key={i} className="tour-cards">
          <Tour tour={obj} />
        </Link>
      ))}
    </div>
  );
}
export default Tours;