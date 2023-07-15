import Tours from '../tours/Tours'
function Home({tour}) {
    return (
        <div className='home'>
            <Tours tour={tour} />
        </div>
    );
}
export default Home;