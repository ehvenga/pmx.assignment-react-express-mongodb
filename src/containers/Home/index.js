import { useSelector } from 'react-redux'

const Home = () => {

    const movies = useSelector(state => state.data)

    return(
        <div className="container">
            <h2>Trending Now</h2>
            {
                movies.length === 0 ? 
                <div>No Movie Available: Upload Movies</div> :
                movies.map((item, idx) => {
                    return (
                        <div className="card col-3">
                            <div className="card-header">{item.name}</div>
                            <div>{item.category}</div>
                            <img src={`${item.photoUrl}`} alt={item.name}></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home