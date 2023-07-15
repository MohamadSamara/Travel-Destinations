function Tour({ tour }) {
    return (
        <div className="tour-card">
            <h3 className="tour-title">{tour.name}</h3>
            <img className="tour-image" src={tour.image} alt={tour.name} />
        </div>
    );
}
export default Tour;